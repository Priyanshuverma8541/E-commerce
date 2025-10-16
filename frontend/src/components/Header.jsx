import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-yellow-100 shadow-sm fixed top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-serif font-bold text-slate-900 hover:text-yellow-600 transition-colors"
        >
          <span className="text-yellow-500">Savitri</span> Jewels
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-slate-700 hover:text-yellow-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-slate-700 hover:text-yellow-600"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-slate-700 hover:text-yellow-600"
              }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-slate-700 hover:text-yellow-600"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-slate-700 hover:text-yellow-600"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Login/Register Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/login"
            className="text-slate-700 font-medium hover:text-yellow-600 transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/registration"
            className="bg-yellow-400 text-slate-900 font-semibold px-4 py-2 rounded-xl shadow hover:bg-yellow-500 active:scale-95 transition-all"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 text-slate-700 hover:text-yellow-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
