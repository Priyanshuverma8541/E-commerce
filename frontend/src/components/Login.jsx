
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      alert("Login successful!");
    } catch (err) {
      const message =
        err.response?.data?.error ||
        err.message ||
        "Login failed. Please check your credentials.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <div className="mt-20 min-h-screen flex items-center justify-center px-4 bg-[#fff4e3]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md p-8 bg-white/90 backdrop-blur-md border border-yellow-200 shadow-lg rounded-3xl"
      >
        <h2 className="text-3xl font-serifHeading font-bold text-center text-yellow-600 mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 text-center p-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
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

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 mt-3 rounded-full font-semibold text-white shadow-md transition-all ${
              loading
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-700 mb-3">Don't have an account?</p>
          <a
            href="/registration"
            className="inline-block mt-2 px-6 py-3 bg-yellow-100 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            Sign Up
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
