
// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const session = require("express-session");
// const passport = require("passport");
// require("./passport.js"); // FIXED here

// // Load environment variables
// dotenv.config();

// // Initialize app
// const app = express();
// const PORT = process.env.PORT || 8080;

// // MongoDB
// mongoose.set("strictQuery", false);
// async function connectDB() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("✅ Connected to MongoDB");
//     } catch (err) {
//         console.error("❌ Failed to connect to MongoDB", err);
//         process.exit(1);
//     }
// }

// // Cloudinary
// const connectCloudinary = require("./config/cloudinary");

// // Passport Google OAuth setup
// require("./auth/googleAuth"); // Make sure this file exists

// // CORS setup
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
// }));
// app.options("*", cors());

// // Middleware
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// // Session + Passport middleware
// app.use(session({
//     secret: "savitriSecret",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // View engine (if needed)
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// // Routes
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/carts", require("./routes/cartRoutes"));
// app.use("/api/payment", require("./routes/payment"));

// // ✅ Google Auth Routes
// app.get("/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get("/auth/google/callback",
//     passport.authenticate("google", {
//         successRedirect: `${process.env.CLIENT_URL}/dashboard`,
//         failureRedirect: `${process.env.CLIENT_URL}/login`
//     })
// );

// app.get("/auth/user", (req, res) => {
//     res.send(req.user);
// });

// app.get("/auth/logout", (req, res) => {
//     req.logout(() => {
//         res.redirect(process.env.CLIENT_URL);
//     });
// });

// // 404 Handler
// app.use((req, res) => {
//     res.status(404).json({ message: "❌ API route not found" });
// });

// // Connect DB and Cloudinary
// connectDB();
// connectCloudinary();

// // Start Server
// const http = require("http");
// const { Server } = require("socket.io");

// const server = http.createServer(app); // ✅ Replace app.listen
// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST"]
//     }
// });

// // ✅ Socket.io configuration
// io.on("connection", (socket) => {
//     console.log("✅ Socket connected:", socket.id);

//     // Join user room
//     socket.on("joinUserRoom", (userId) => {
//         socket.join(userId);
//         console.log(`✅ User joined room: ${userId}`);
//     });

//     // Listen for order updates
//     socket.on("orderStatusChanged", ({ userId, updatedOrder }) => {
//         io.to(userId).emit("orderUpdated", updatedOrder);
//     });

//     socket.on("disconnect", () => {
//         console.log("❌ Socket disconnected:", socket.id);
//     });
// });

// // Start Server
// server.listen(PORT, () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });

// // Export io for routes
// module.exports = io;
// // Graceful Shutdown
// const shutdown = async () => {
//     console.log("🛑 Server shutting down...");
//     await mongoose.disconnect();
//     server.close(() => process.exit(0));
// };

// process.on("SIGINT", shutdown);
// process.on("SIGTERM", shutdown);

// process.on("uncaughtException", (err) => {
//     console.error("⚠️ Uncaught Exception:", err);
//     process.exit(1);
// });

// process.on("unhandledRejection", (err) => {
//     console.error("⚠️ Unhandled Rejection:", err);
//     process.exit(1);
// });   


// ---------------------- IMPORTS ----------------------
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const http = require("http");
const { Server } = require("socket.io");

// ---------------------- INIT ----------------------
dotenv.config();
require("./passport.js");
require("./auth/googleAuth"); // Google OAuth setup
const connectCloudinary = require("./config/cloudinary");

const app = express();
const PORT = process.env.PORT || 8080;

// ---------------------- DATABASE ----------------------
mongoose.set("strictQuery", false);
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
}

// ---------------------- CORS ----------------------
// Allow both local and deployed frontend
const allowedOrigins = [
    "http://localhost:5173",
    "https://savitri-jewellers-frontend-9o6p.onrender.com"
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("❌ Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    })
);
app.options("*", cors());

// ---------------------- MIDDLEWARE ----------------------
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ---------------------- SESSION + PASSPORT ----------------------
app.use(
    session({
        secret: process.env.SESSION_SECRET || "savitriSecret",
        resave: false,
        saveUninitialized: false
    })
);
app.use(passport.initialize());
app.use(passport.session());

// ---------------------- VIEW ENGINE (optional) ----------------------
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ---------------------- ROUTES ----------------------
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/carts", require("./routes/cartRoutes"));
app.use("/api/payment", require("./routes/payment"));

// ---------------------- GOOGLE AUTH ROUTES ----------------------
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: `${process.env.CLIENT_URL}/dashboard`,
        failureRedirect: `${process.env.CLIENT_URL}/login`
    })
);

app.get("/auth/user", (req, res) => res.send(req.user));

app.get("/auth/logout", (req, res) => {
    req.logout(() => {
        res.redirect(process.env.CLIENT_URL);
    });
});

// ---------------------- 404 HANDLER ----------------------
app.use((req, res) => {
    res.status(404).json({ message: "❌ API route not found" });
});

// ---------------------- SOCKET.IO ----------------------
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("✅ Socket connected:", socket.id);

    socket.on("joinUserRoom", (userId) => {
        socket.join(userId);
        console.log(`✅ User joined room: ${userId}`);
    });

    socket.on("orderStatusChanged", ({ userId, updatedOrder }) => {
        io.to(userId).emit("orderUpdated", updatedOrder);
    });

    socket.on("disconnect", () => {
        console.log("❌ Socket disconnected:", socket.id);
    });
});

// ---------------------- STARTUP ----------------------
connectDB();
connectCloudinary();

server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// ---------------------- CLEANUP ----------------------
const shutdown = async () => {
    console.log("🛑 Shutting down server...");
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

module.exports = io;
