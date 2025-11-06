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

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending"
  },
  status: {
    type: String,
    enum: ["ordered", "processing", "shipped", "delivered"],
    default: "ordered"
  },
  paymentInfo: {
    razorpay_order_id: String,
    razorpay_payment_id: String,
    razorpay_signature: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
