
// const About = () => {
//     return (
//         <div>
//             <section className="bg-yellow-100  text-white-500 p-8 text-center mt-20"
//             style={{
//     backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
//   }}>
//                 <h2 className="text-3xl font-bold">About Us</h2>
//                 <p className="mt-2">We are a family-owned business that has been in operation for over 50 years. We specialize in custom jewelry design and repair. We are committed to providing our customers with the highest quality jewelry at the best possible prices.</p>
//             </section>
//         </div>
//     );
// }

// export default About;






// import React from "react";

// const About = () => {
//   return (
//     <div className="mt-28">
//       <section
//         className="relative bg-cover bg-center bg-no-repeat text-center flex flex-col items-center justify-center py-28 px-6"
//         style={{
//           backgroundImage:
//             "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
//         }}
//       >
//         {/* Overlay for better text contrast */}
//         <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

//         <div className="relative max-w-3xl text-white">
//           <h2 className="text-4xl md:text-5xl font-serifHeading font-bold mb-4">
//             About Us
//           </h2>
//           <p className="text-lg md:text-xl text-white/90 leading-relaxed">
//             We are a family-owned business that has been in operation for over 50
//             years. We specialize in custom jewelry design and repair. Our mission
//             is to provide our customers with the highest quality jewelry, crafted
//             with passion and precision.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const bgColor = "bg-[#fff4e3]"; // same background as Home

  return (
    <div className={`w-full ${bgColor} mt-28`}>
      <section className="py-28 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Subtle floating shapes for animation */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">
            About Us
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-lg md:text-xl text-slate-800/90 leading-relaxed"
          >
            We are a family-owned business with over 50 years of experience.
            We specialize in custom jewelry design and repair. Our mission is
            to provide our customers with the highest quality jewelry, crafted
            with passion and precision.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
