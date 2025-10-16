import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../App"; 
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Section from "../Section";
import Slider from "../Slider";

const DefaultLayout = () => {
  const { isAuthenticated } = useAuth(); 

  return (
    <div className="bg-[#fff4e3] min-h-screen text-slate-800 flex flex-col">
      {/* Navbar always shows if logged in */}
      {isAuthenticated ? <Navbar /> : <Header />}

      {/* Page Content */}
      <main className="w-full flex-1">
        <Outlet />
      </main>

      {/* Optional Additional Sections */}
      <Section />
      <Slider />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
