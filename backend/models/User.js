
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
            'Please enter a valid Gmail address'
        ]
    },
    password: { type: String, required: true },
    googleId: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    address: { type: String, required: true }
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.generateToken = function () {
    return jwt.sign(
        { userId: this._id, role: this.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" }
    );
};

module.exports = mongoose.model("User", UserSchema);
