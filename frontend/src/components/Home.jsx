// import { NavLink } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className=" mt-10">

//       {/* Hero Banner Section */}
//       <section className="relative overflow-hidden shadow-lg">
//         <img
//           src="https://goldzouq.in/wp-content/uploads/2023/04/C.-Krishniah-Chetty-Sons-Iniside-the-store.webp"
//           alt="Hero Banner"
//           className="w-full h-[600px] object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-5xl font-extrabold">Elegance Begins Here</h1>
//           <p className="mt-4 text-lg max-w-2xl">
//             Explore our latest collection of handcrafted gold and diamond jewellery designed for every occasion.
//           </p>
        
//             <NavLink to="/product" className="mt-6 px-6 py-3 bg-yellow-100 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
//             Discover Now
//           </NavLink>
//         </div>
//       </section>

//       {/* New Arrivals Section */}
//       <section className="px-6 text-center "
//       style={{
//     backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
//   }}
//       >
//         <h2 className="text-4xl font-bold mb-6">New Arrivals</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {['https://images.unsplash.com/photo-1728119884904-98bc3caf518d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
//             'https://cdn.augrav.com/online/jewels/2025/03/18105053/OLJswuMjP9IYkjSMfEF-680x680.jpg',
//             'https://images.unsplash.com/photo-1696774665695-2f237304c3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxqZXdlbGxlcnklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'].map((url, idx) => (
//             <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition">
//               <img src={`${url}?auto=format&fit=crop&w=600&q=80`} alt="Jewellery" className="w-full h-[300px] object-cover" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Shop by Category */}
//       <section className="bg-yellow-50 py-12 px-6 text-center"
//       style={{
//     backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
//   }}>
//         <h2 className="text-4xl font-bold mb-8">Shop by Category</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { name: "Earrings", img: "https://cdn.augrav.com/online/jewels/2022/11/28105859/2-11.jpg" },
//             { name: "Necklaces", img: "https://cdn.quicksell.co/-MJFwWnWKT0Tg2Lb63Bv/products/-OAHvhgnqdrU9aQu7Eog.jpg" },
//             { name: "Rings", img: "https://cdn.augrav.com/online/jewels/2025/08/04103420/1-1-680x680.jpg" },
//             { name: "Bangles", img: "https://bangarurani.com/cdn/shop/files/processed-5_1_cd177966-6954-46c1-956a-023191cb26cb.png?v=1720278224&width=823" },
//           ].map((item, index) => (
//             <div key={index} className="rounded-lg overflow-hidden shadow hover:scale-105 transition">
//               <img src={`${item.img}?auto=format&fit=crop&w=400&q=80`} alt={item.name} className="w-full h-[250px] object-cover" />
//               <div className="py-3 bg-white font-semibold">{item.name}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Festive Collection */}
//       <section className="relative bg-white text-center ">
//         <img
//           src="https://cdn.augrav.com/online/jewels/2015/01/Custom-Name-Engraved-RIngs.jpg"
//           alt="Festive"
//           className="w-full  object-cover "
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
//           <h2 className="text-4xl font-bold">Festive Collection</h2>
//           <p className="mt-2">Celebrate traditions with a touch of gold elegance</p>
//           <NavLink to="/product" className="mt-6 px-6 py-3 bg-yellow-100 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
//             View Collection
//           </NavLink>
//         </div>
//       </section>

//       {/* Trust / Testimonials */}
//       <section className="bg-gray-100 py-12 px-6 text-center"
//       style={{
//     backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
//   }}>
//         <h2 className="text-3xl font-bold mb-6">Trusted by Thousands</h2>
//         <p className="text-lg max-w-2xl mx-auto mb-8">Our jewellery is crafted with utmost care, precision, and authenticity. See what our customers have to say.</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { name: "Aditi Sharma", review: "Absolutely stunning craftsmanship. Received so many compliments!" },
//             { name: "Ravi Kapoor", review: "Timely delivery and the gold quality is top notch." },
//             { name: "Neha Sinha", review: "Best jewellery buying experience online. Will buy again!" },
//           ].map((t, i) => (
//             <div key={i} className="bg-white p-6 rounded-lg shadow text-left">
//               <p className="italic">"{t.review}"</p>
//               <p className="mt-4 font-semibold">- {t.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Store Locator / Final CTA */}
//       <section className="bg-yellow-200 py-12 text-center"
//       style={{
//     backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
//   }}>
//         <h2 className="text-3xl font-bold text-orange-800">Visit Our Nearest Store</h2>
//         <p className="mt-2 text-orange-600">Over 500+ stores across India. Come experience luxury in person.</p>
//         <button className="mt-5 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
//           Find a Store
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Home;


// import { NavLink } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="mt-16 bg-neutral-50 text-slate-800 font-sans overflow-hidden">
//       {/* Hero Banner Section */}
//       <section className="relative h-[80vh] w-full overflow-hidden">
//         <img
//           src="https://goldzouq.in/wp-content/uploads/2023/04/C.-Krishniah-Chetty-Sons-Iniside-the-store.webp"
//           alt="Hero Banner"
//           className="w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
//           <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">
//             Elegance Begins Here
//           </h1>
//           <p className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-200">
//             Explore our latest collection of handcrafted gold and diamond jewellery,
//             designed for every occasion.
//           </p>
//           <NavLink
//             to="/product"
//             className="mt-8 inline-block px-8 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
//           >
//             Discover Now
//           </NavLink>
//         </div>
//       </section>

//       {/* New Arrivals Section */}
//       <section className="py-16 px-6 text-center bg-gradient-to-b from-white to-yellow-50">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif text-slate-800">
//           New Arrivals
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             "https://images.unsplash.com/photo-1728119884904-98bc3caf518d?w=600&auto=format&fit=crop&q=60",
//             "https://cdn.augrav.com/online/jewels/2025/03/18105053/OLJswuMjP9IYkjSMfEF-680x680.jpg",
//             "https://images.unsplash.com/photo-1696774665695-2f237304c3b0?w=600&auto=format&fit=crop&q=60",
//           ].map((url, idx) => (
//             <div
//               key={idx}
//               className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transform hover:scale-[1.03] transition-all duration-300"
//             >
//               <img
//                 src={url}
//                 alt="Jewellery"
//                 className="w-full h-72 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Shop by Category */}
//       <section className="py-16 px-6 text-center bg-neutral-100">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif">
//           Shop by Category
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             { name: "Earrings", img: "https://cdn.augrav.com/online/jewels/2022/11/28105859/2-11.jpg" },
//             { name: "Necklaces", img: "https://cdn.quicksell.co/-MJFwWnWKT0Tg2Lb63Bv/products/-OAHvhgnqdrU9aQu7Eog.jpg" },
//             { name: "Rings", img: "https://cdn.augrav.com/online/jewels/2025/08/04103420/1-1-680x680.jpg" },
//             { name: "Bangles", img: "https://bangarurani.com/cdn/shop/files/processed-5_1_cd177966-6954-46c1-956a-023191cb26cb.png?v=1720278224&width=823" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="py-3 text-slate-800 font-semibold text-lg bg-yellow-50">
//                 {item.name}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Festive Collection */}
//       <section className="relative h-[60vh] w-full text-center">
//         <img
//           src="https://cdn.augrav.com/online/jewels/2015/01/Custom-Name-Engraved-RIngs.jpg"
//           alt="Festive"
//           className="w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
//           <h2 className="text-3xl md:text-5xl font-bold font-serif">
//             Festive Collection
//           </h2>
//           <p className="mt-3 text-lg text-neutral-200">
//             Celebrate traditions with a touch of gold elegance.
//           </p>
//           <NavLink
//             to="/product"
//             className="mt-8 inline-block px-8 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
//           >
//             View Collection
//           </NavLink>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-6 text-center bg-white">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-slate-800">
//           Trusted by Thousands
//         </h2>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
//           Our jewellery is crafted with utmost care, precision, and authenticity.
//           See what our customers have to say.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             { name: "Aditi Sharma", review: "Absolutely stunning craftsmanship. Received so many compliments!" },
//             { name: "Ravi Kapoor", review: "Timely delivery and the gold quality is top notch." },
//             { name: "Neha Sinha", review: "Best jewellery buying experience online. Will buy again!" },
//           ].map((t, i) => (
//             <div
//               key={i}
//               className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <p className="italic text-slate-700">"{t.review}"</p>
//               <p className="mt-4 font-semibold text-yellow-700">- {t.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-16 text-center bg-gradient-to-b from-yellow-100 to-yellow-200">
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-serif">
//           Visit Our Nearest Store
//         </h2>
//         <p className="mt-3 text-slate-700">
//           Over 500+ stores across India. Come experience luxury in person.
//         </p>
//         <button className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300">
//           Find a Store
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Home;import React from "react";import React from "react";import React from "react";import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const newArrivals = [
  "https://images.unsplash.com/photo-1728119884904-98bc3caf518d?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1696774665695-2f237304c3b0?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80",
  "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc5b6b963/homepage/tanishq-collections/festive-edit-desktop.jpg",
  "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg"
  
];

const categories = [
  { name: "Earrings", img: "https://cdn.augrav.com/online/jewels/2022/11/28105859/2-11.jpg" },
  { name: "Necklaces", img: "https://cdn.quicksell.co/-MJFwWnWKT0Tg2Lb63Bv/products/-OAHvhgnqdrU9aQu7Eog.jpg" },
  { name: "Rings", img: "https://cdn.augrav.com/online/jewels/2025/08/04103420/1-1-680x680.jpg" },
  { name: "Bangles", img: "https://bangarurani.com/cdn/shop/files/processed-5_1_cd177966-6954-46c1-956a-023191cb26cb.png?v=1720278224&width=823" },
];

const testimonials = [
  { name: "Aditi Sharma", review: "Absolutely stunning craftsmanship. Received so many compliments!" },
  { name: "Ravi Kapoor", review: "Timely delivery and the gold quality is top notch." },
  { name: "Neha Sinha", review: "Best jewellery buying experience online. Will buy again!" },
];

const Home = () => {
  const bgColor = "bg-[#fff4e3]"; // single uniform background color
  return (
    <div className={`w-full font-sans text-slate-900 overflow-hidden ${bgColor}`}>

      {/* Hero Section */}
      <section className={`relative w-full h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden`}>
        {/* Animated floating circles */}
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-40 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-300 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-bold z-10"
        >
          Elegance Begins Here
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-3xl z-10"
        >
          Explore handcrafted gold & diamond jewellery for every occasion.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 z-10"
        >
          <NavLink
            to="/product"
            className="px-10 py-4 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            Discover Now
          </NavLink>
        </motion.div>
      </section>

      {/* New Arrivals */}
      <section className={`py-24 px-6 w-full`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center font-serif"
        >
          New Arrivals
        </motion.h2>

        <div className="relative max-w-[1400px] mx-auto overflow-hidden rounded-3xl">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-33%", "-66%", "0%"] }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          >
            {newArrivals.map((url, idx) => (
              <motion.div
                key={idx}
                className="min-w-[33.33%] rounded-3xl overflow-hidden shadow-xl bg-white border border-yellow-100"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={url}
                  alt="Jewellery"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className={`py-24 px-6 w-full`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center font-serif"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white border border-yellow-100 transition-all duration-300"
            >
              <img src={item.img} alt={item.name} className="w-full h-64 object-cover" />
              <div className="py-3 text-center font-semibold text-lg text-slate-800 bg-yellow-50">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Festive Collection */}
      <section className={`py-24 px-6 w-full`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-center font-serif"
        >
          Festive Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-slate-700 max-w-3xl mx-auto mb-8 text-lg md:text-xl"
        >
          Celebrate traditions with a touch of gold elegance.
        </motion.p>
        <div className="flex justify-center">
          <NavLink
            to="/product"
            className="px-10 py-4 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            View Collection
          </NavLink>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-24 px-6 w-full`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center font-serif"
        >
          Trusted by Thousands
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className="bg-yellow-50 border border-yellow-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="italic text-slate-700 mb-4 text-lg">"{t.review}"</p>
              <p className="font-semibold text-yellow-700 text-md">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-24 px-6 w-full text-center`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6 font-serif"
        >
          Visit Our Nearest Store
        </motion.h2>
        <p className="text-slate-700 mb-10 max-w-3xl mx-auto text-lg md:text-xl">
          Over 500+ stores across India. Come experience luxury in person.
        </p>
        <button className="px-10 py-4 bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300">
          Find a Store
        </button>
      </section>

    </div>
  );
};

export default Home;
