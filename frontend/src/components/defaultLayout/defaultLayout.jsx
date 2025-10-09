
import Footer from "../Footer";
import Section from "../Section";
import Slider from "../Slider";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#fff9ec] via-[#fef4e8] to-[#fff1d6] min-h-screen text-gray-900">
      <Outlet />
      <Section />
      <Slider />
      <Footer />
      </div>
      
    </>
  );
};

export default DefaultLayout;
