

const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/Order");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create Razorpay Order
exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount, userId } = req.body;

    console.log("📥 Received body:", req.body);

    // Validate required fields
    if (!userId || !items || !items.length || !totalAmount) {
      console.error("❌ Missing required fields in request body");
      return res
        .status(400)
        .json({ success: false, message: "Invalid request: Missing data" });
    }

    console.log("💰 Creating Razorpay order for user:", userId);
    console.log("🧾 Total Amount (₹):", totalAmount);

    const options = {
      amount: totalAmount * 100, // convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const rpOrder = await razorpay.orders.create(options);
    console.log("✅ Razorpay order created:", rpOrder.id);

    // Create order in MongoDB
    const order = await Order.create({
      user: userId,
      items,
      totalAmount,
      paymentStatus: "pending",
      paymentInfo: { razorpay_order_id: rpOrder.id },
    });

    console.log("✅ Order saved to MongoDB:", order._id);

    res.json({ success: true, rpOrder, order });
  } catch (err) {
    console.error("💥 Error creating Razorpay order:", err.message);
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
};

// ✅ Verify Razorpay Payment
exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } =
      req.body;

    console.log("🧾 Verifying payment for Order ID:", orderId);

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      console.error("❌ Invalid Razorpay Signature");
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature" });
    }

    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        paymentStatus: "paid",
        status: "processing",
        paymentInfo: { razorpay_order_id, razorpay_payment_id, razorpay_signature },
      },
      { new: true }
    );

    console.log("✅ Payment verified and updated:", order._id);

    res.json({ success: true, order });
  } catch (err) {
    console.error("💥 Payment verification failed:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Fetch User Orders
exports.getMyOrders = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    console.log("📦 Fetching orders for user:", userId);

    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    console.error("💥 Failed to fetch orders:", err.message);
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
};
