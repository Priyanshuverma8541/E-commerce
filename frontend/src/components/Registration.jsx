
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:8080/api/users/register", {
        name,
        email,
        password,
        address,
      });

      alert("🎉 Registration successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  return (
    <div className="mt-20 min-h-screen bg-[#fff4e3] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-lg rounded-3xl p-8 border border-yellow-200"
      >
        <h2 className="text-3xl font-serifHeading font-bold text-center text-yellow-600 mb-6">
          Create Your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 text-center p-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-800">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border border-yellow-200 bg-[#fffaf2] rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border border-yellow-200 bg-[#fffaf2] rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border border-yellow-200 bg-[#fffaf2] rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border border-yellow-200 bg-[#fffaf2] rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 mt-3 rounded-full font-semibold text-white shadow-md transition-all ${
              loading
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-5">
          <div className="h-px bg-yellow-200 w-1/3" />
          <span className="text-gray-500 text-sm mx-3">OR</span>
          <div className="h-px bg-yellow-200 w-1/3" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleRegister}
          className="w-full px-4 py-2 rounded-full font-semibold text-white bg-red-500 hover:bg-red-600 transition shadow-md"
        >
          Continue with Google
        </button>

        {/* Login link */}
        <p className="text-sm text-center text-slate-700 mt-5">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Login here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Registration;
