// // models/Order.js
// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//       quantity: Number,
//     },
//   ],
//   totalAmount: Number,
//   status: {
//     type: String,
//     enum: ["Pending", "Completed", "Cancelled"],
//     default: "Pending",
//   },
//   paymentInfo: {
//     razorpay_order_id: String,
//     razorpay_payment_id: String,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("Order", orderSchema);
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // ✅ Reference to the user who placed the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ✅ Array of ordered items
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],

    // ✅ Total payable amount (in INR)
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    // ✅ Payment status tracking
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    // ✅ Order status tracking
    status: {
      type: String,
      enum: ["ordered", "processing", "shipped", "delivered"],
      default: "ordered",
    },

    // ✅ Razorpay payment information
    paymentInfo: {
      razorpay_order_id: { type: String },
      razorpay_payment_id: { type: String },
      razorpay_signature: { type: String },
    },
  },
  {
    timestamps: true, // ✅ Adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model("Order", orderSchema);
