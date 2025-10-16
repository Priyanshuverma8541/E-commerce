
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./passport.js"); // FIXED here

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 8080;

// MongoDB
mongoose.set("strictQuery", false);
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

// Cloudinary
const connectCloudinary = require("./config/cloudinary");

// Passport Google OAuth setup
require("./auth/googleAuth"); // Make sure this file exists

// CORS setup
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.options("*", cors());

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Session + Passport middleware
app.use(session({
    secret: "savitriSecret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// View engine (if needed)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/carts", require("./routes/cartRoutes"));
app.use("/api/payment", require("./routes/payment"));

// ✅ Google Auth Routes
app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: `${process.env.CLIENT_URL}/dashboard`,
        failureRedirect: `${process.env.CLIENT_URL}/login`
    })
);

app.get("/auth/user", (req, res) => {
    res.send(req.user);
});

app.get("/auth/logout", (req, res) => {
    req.logout(() => {
        res.redirect(process.env.CLIENT_URL);
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: "❌ API route not found" });
});

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// Start Server
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

// Graceful Shutdown
const shutdown = async () => {
    console.log("🛑 Server shutting down...");
    await mongoose.disconnect();
    server.close(() => process.exit(0));
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

process.on("uncaughtException", (err) => {
    console.error("⚠️ Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.error("⚠️ Unhandled Rejection:", err);
    process.exit(1);
});