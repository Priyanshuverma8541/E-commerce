import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className=" mt-10">

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden shadow-lg">
        <img
          src="https://goldzouq.in/wp-content/uploads/2023/04/C.-Krishniah-Chetty-Sons-Iniside-the-store.webp"
          alt="Hero Banner"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl font-extrabold">Elegance Begins Here</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Explore our latest collection of handcrafted gold and diamond jewellery designed for every occasion.
          </p>
        
            <NavLink to="/product" className="mt-6 px-6 py-3 bg-yellow-100 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            Discover Now
          </NavLink>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="px-6 text-center "
      style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
  }}
      >
        <h2 className="text-4xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['https://images.unsplash.com/photo-1728119884904-98bc3caf518d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
            'https://cdn.augrav.com/online/jewels/2025/03/18105053/OLJswuMjP9IYkjSMfEF-680x680.jpg',
            'https://images.unsplash.com/photo-1696774665695-2f237304c3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxqZXdlbGxlcnklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'].map((url, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition">
              <img src={`${url}?auto=format&fit=crop&w=600&q=80`} alt="Jewellery" className="w-full h-[300px] object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="bg-yellow-50 py-12 px-6 text-center"
      style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
  }}>
        <h2 className="text-4xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Earrings", img: "https://cdn.augrav.com/online/jewels/2022/11/28105859/2-11.jpg" },
            { name: "Necklaces", img: "https://cdn.quicksell.co/-MJFwWnWKT0Tg2Lb63Bv/products/-OAHvhgnqdrU9aQu7Eog.jpg" },
            { name: "Rings", img: "https://cdn.augrav.com/online/jewels/2025/08/04103420/1-1-680x680.jpg" },
            { name: "Bangles", img: "https://bangarurani.com/cdn/shop/files/processed-5_1_cd177966-6954-46c1-956a-023191cb26cb.png?v=1720278224&width=823" },
          ].map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow hover:scale-105 transition">
              <img src={`${item.img}?auto=format&fit=crop&w=400&q=80`} alt={item.name} className="w-full h-[250px] object-cover" />
              <div className="py-3 bg-white font-semibold">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Festive Collection */}
      <section className="relative bg-white text-center ">
        <img
          src="https://cdn.augrav.com/online/jewels/2015/01/Custom-Name-Engraved-RIngs.jpg"
          alt="Festive"
          className="w-full  object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold">Festive Collection</h2>
          <p className="mt-2">Celebrate traditions with a touch of gold elegance</p>
          <NavLink to="/product" className="mt-6 px-6 py-3 bg-yellow-100 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            View Collection
          </NavLink>
        </div>
      </section>

      {/* Trust / Testimonials */}
      <section className="bg-gray-100 py-12 px-6 text-center"
      style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
  }}>
        <h2 className="text-3xl font-bold mb-6">Trusted by Thousands</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">Our jewellery is crafted with utmost care, precision, and authenticity. See what our customers have to say.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Aditi Sharma", review: "Absolutely stunning craftsmanship. Received so many compliments!" },
            { name: "Ravi Kapoor", review: "Timely delivery and the gold quality is top notch." },
            { name: "Neha Sinha", review: "Best jewellery buying experience online. Will buy again!" },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-left">
              <p className="italic">"{t.review}"</p>
              <p className="mt-4 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Store Locator / Final CTA */}
      <section className="bg-yellow-200 py-12 text-center"
      style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1746025617433-5f20cbd3b36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJyb3duJTIwY29sb3VyJTVDfGVufDB8fDB8fHww')",
  }}>
        <h2 className="text-3xl font-bold text-orange-800">Visit Our Nearest Store</h2>
        <p className="mt-2 text-orange-600">Over 500+ stores across India. Come experience luxury in person.</p>
        <button className="mt-5 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
          Find a Store
        </button>
      </section>
    </div>
  );
};

export default Home;
