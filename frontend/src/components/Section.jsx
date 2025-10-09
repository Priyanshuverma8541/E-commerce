import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <div className="relative bg-white overflow-hidden shadow-xl ">
      {/* Background image of a model wearing jewellery */}
      <img
        src="https://cdn.augrav.com/online/jewels/2015/11/Bhima-jewellers-Bangalore.jpg"
        className="w-full h-[500px] object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Shine with Grace & Luxury
          </h2>
        
  
        </div>
      </div>
    </div>
  );
};

export default Section;
