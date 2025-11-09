




import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import FAQs from "./components/FAQs";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Login from "./components/Login";
import Product from "./components/Product";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Order from "./components/Order";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Legal from "./components/Legal";

import DefaultLayout from "./components/defaultLayout/defaultLayout";
import CartProvider from "./components/CartProvider"; 

import ScrollToHashElement from "./components/ScrollToHashElement";
const API = import.meta.env.VITE_API_URL || "https://savitri-jewellers-backend-h6vb.onrender.com"
// 👇 Auth Context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const isAuthenticated = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch {
        logout();
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API}/api/users/login`, { email, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", user._id);
      setToken(token);
      setUser(user);
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (

    
    <AuthProvider>
      <CartProvider>
        <Router>
        <ScrollToHashElement />
          <Routes>
            {/* Public Pages */}
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="*" element={<Error />} />
            </Route>

            {/* Protected Dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route path="products" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Order />} />
              <Route path="profile" element={<Profile />} />
              <Route path="faqs" element={<FAQs />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
