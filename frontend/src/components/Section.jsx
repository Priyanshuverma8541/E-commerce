// import { NavLink } from "react-router-dom";

// const Section = () => {
//   return (
//     <div className="relative bg-white overflow-hidden shadow-xl ">
//       {/* Background image of a model wearing jewellery */}
//       <img
//         src="https://cdn.augrav.com/online/jewels/2015/11/Bhima-jewellers-Bangalore.jpg"
//         className="w-full h-[500px] object-cover"
//       />

//       {/* Overlay content */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
//         <div className="text-white">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
//             Shine with Grace & Luxury
//           </h2>
        
  
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section;import React from "react";
import { motion } from "framer-motion";

// Section data
const sections = [
  {
    title: "Premium Craftsmanship",
    desc: "Each jewel is carefully handcrafted with precision and love.",
  },
  {
    title: "Exclusive Collections",
    desc: "Discover unique pieces curated for every occasion.",
  },
  {
    title: "Trusted Quality",
    desc: "Certified purity and timeless designs you can rely on.",
  },
];

const Section = () => {
  return (
    <section className="w-full min-h-screen py-24 bg-gradient-to-br from-[#fff9ec] via-[#fef4e8] to-[#fff1d6] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4"
        >
          Why Choose <span className="text-yellow-500">Savitri Jewels</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg sm:text-xl"
        >
          We blend traditional artistry with modern design to create jewelry that tells
          your story — elegant, personal, and timeless.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white/90 p-8 rounded-3xl shadow-md border border-yellow-100
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-full mx-auto flex items-center justify-center mb-5">
                <span className="text-yellow-500 text-2xl font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
