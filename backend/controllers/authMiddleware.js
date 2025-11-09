
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log("🔹 Incoming Request:", req.method, req.originalUrl);

  if (req.method === "OPTIONS") {
    console.log("🟢 Skipping token verification for OPTIONS request");
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.error("❌ Missing Authorization header");
    return res.status(403).json({ error: "Unauthorized: No token provided" });
  }

  if (!authHeader.startsWith("Bearer ")) {
    console.error("❌ Invalid Authorization format");
    return res.status(403).json({ error: "Invalid token format" });
  }

  const token = authHeader.split(" ")[1];
  console.log("🔹 Extracted Token:", token ? token.slice(0, 15) + "..." : "None");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("✅ JWT Verified Successfully:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.error("⛔ JWT Error:", error.message);
    return res.status(403).json({ error: "Invalid Token" });
  }
};

module.exports = authMiddleware;
