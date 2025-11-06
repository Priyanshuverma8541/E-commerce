
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
