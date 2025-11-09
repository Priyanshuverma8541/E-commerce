// const express = require("express");
// const router = express.Router();
// const { createOrder, verifyPayment, getMyOrders } = require("../controllers/paymentController");
// const authMiddleware = require("../controllers/authMiddleware");

// router.post("/create-order", authMiddleware, createOrder);
// router.post("/verify", authMiddleware, verifyPayment);
// router.get("/my-orders", authMiddleware, getMyOrders);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  createOrder,
  verifyPayment,
  getMyOrders,
} = require("../controllers/paymentController");
const authMiddleware = require("../controllers/authMiddleware");

router.post("/create-order", authMiddleware, createOrder);
router.post("/verify", authMiddleware, verifyPayment);
router.get("/my-orders", authMiddleware, getMyOrders);

module.exports = router;

