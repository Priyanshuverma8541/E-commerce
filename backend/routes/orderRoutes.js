
const express = require("express");
const Order = require("../models/Order");
const io = require("../index"); // ✅ Import socket instance correctly

const router = express.Router();

// ✅ Get all orders (Admin purpose)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("items.productId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// ✅ Get orders by user
router.get("/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate("items.productId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user orders" });
  }
});

// ✅ Get specific order
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("items.productId");
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
});

// ✅ Create order + Emit socket event
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    io.to(newOrder.user.toString()).emit("orderCreated", newOrder); // ✅ Real-time notify

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("❌ Order creation failed:", error);
    res.status(400).json({ error: "Failed to create order" });
  }
});

// ✅ Update order + Emit socket event
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

    io.to(updatedOrder.user.toString()).emit("orderUpdated", updatedOrder); // ✅ Live update emit

    res.json(updatedOrder);
  } catch (error) {
    console.error("❌ Order update failed:", error);
    res.status(400).json({ error: "Failed to update order" });
  }
});

// ✅ Delete order
router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
});

module.exports = router;
