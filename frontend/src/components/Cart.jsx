// import React from "react";
// import { useCart } from "./CartProvider";
// // const back=`https://savitri-jewellers-backend.onrender.com`
// const Cart = () => {
//   const { cartItems, removeFromCart } = useCart();

//   const getTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + (item.productId?.price || 0) * item.quantity;
//     }, 0);
//   };

//   const handleBuyNow = async (productId, quantity) => {
//     const selectedItem = cartItems.find(item => item.productId._id === productId);
//     const amount = selectedItem.productId.price * quantity * 100; // in paise

//     try {
//       const res = await fetch("http://localhost:8080/api/payment/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Vite environment variable
//         amount: data.amount,
//         currency: "INR",
//         name: "Savitri Jewellers",
//         description: `Purchase - ${selectedItem.productId.name}`,
//         order_id: data.id,
//         handler: async function (response) {
//           const token = localStorage.getItem("token");

//           const verifyRes = await fetch("localhost:8080/api/payment/verify", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//               ...response,
//               productId,
//               quantity,
//               totalAmount: selectedItem.productId.price * quantity,
//             }),
//           });

//           const result = await verifyRes.json();
//           alert(result.message);
//         },
//         theme: { color: "#F37254" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment initiation failed", error);
//       alert("Payment failed. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-20 p-4">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-lg text-center text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-xl shadow-lg bg-white"
//             >
//               <div className="flex items-center space-x-6">
//                 <img
//                   src={item.productId?.images?.[0] || "https://via.placeholder.com/100"}
//                   alt={item.productId?.name}
//                   className="w-24 h-24 object-cover rounded-xl"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">{item.productId?.name}</h3>
//                   <p className="text-gray-600">Price: ₹{item.productId?.price}</p>
//                   <p className="text-gray-600">Quantity: {item.quantity}</p>
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
//                 <button
//                   onClick={() => handleBuyNow(item.productId?._id, item.quantity)}
//                   className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                 >
//                   Buy Now
//                 </button>

//                 <button
//                   onClick={() => removeFromCart(item.productId?._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="text-2xl font-bold text-right mt-10 text-gray-700">
//             Total: ₹{getTotal().toFixed(2)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useCart } from "./CartProvider";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.productId?.price || 0) * item.quantity;
    }, 0);
  };

  const handleBuyNow = async (productId, quantity) => {
    const selectedItem = cartItems.find((item) => item.productId._id === productId);
    const amount = selectedItem.productId.price * quantity * 100;

    try {
      const res = await fetch("http://localhost:8080/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Savitri Jewellers",
        description: `Purchase - ${selectedItem.productId.name}`,
        order_id: data.id,
        handler: async function (response) {
          const token = localStorage.getItem("token");

          const verifyRes = await fetch("http://localhost:8080/api/payment/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              ...response,
              productId,
              quantity,
              totalAmount: selectedItem.productId.price * quantity,
            }),
          });

          const result = await verifyRes.json();
          alert(result.message);
        },
        theme: { color: "#F5C518" }, // golden theme
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fff4e3] flex flex-col items-center py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-serifHeading font-bold mb-10 text-yellow-600 text-center"
      >
        🛒 Your Cart
      </motion.h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-700 bg-white/70 px-6 py-4 rounded-xl shadow-md">
          Your cart is empty.
        </p>
      ) : (
        <div className="w-full max-w-5xl space-y-6">
          {cartItems.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-between bg-white/90 border border-yellow-200 rounded-3xl p-6 shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={item.productId?.images?.[0] || "https://via.placeholder.com/100"}
                  alt={item.productId?.name}
                  className="w-28 h-28 object-cover rounded-2xl border border-yellow-100"
                />
                <div>
                  <h3 className="text-xl font-serifHeading font-semibold text-slate-900">
                    {item.productId?.name}
                  </h3>
                  <p className="text-slate-700 mt-1">
                    Price: <span className="font-medium text-yellow-600">₹{item.productId?.price}</span>
                  </p>
                  <p className="text-slate-700">Quantity: {item.quantity}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mt-6 md:mt-0">
                <button
                  onClick={() => handleBuyNow(item.productId?._id, item.quantity)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full font-medium shadow-md transition-all"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => removeFromCart(item.productId?._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium shadow-md transition-all"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-right mt-10 text-slate-800"
          >
            Total:{" "}
            <span className="text-yellow-600">
              ₹{getTotal().toFixed(2)}
            </span>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
