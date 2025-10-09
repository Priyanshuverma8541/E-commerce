// Login.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../App"; // 
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
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-20"
    style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
  }}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>

        {error && <div className="text-red-500 text-center text-sm">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/registration" className="text-blue-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
<NavLink to="/registration" className="mt-6 px-6 py-3 bg-yellow-100 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            Sign Up
          </NavLink>