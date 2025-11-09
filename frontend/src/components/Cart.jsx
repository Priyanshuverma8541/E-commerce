

// import React from "react";
// import { useCart } from "./CartProvider";
// import { motion } from "framer-motion";
// import { handlePayment } from "../../utils/razorpay";


// const Cart = () => {
//   const { cartItems, removeFromCart } = useCart();

//   const getTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + (item.productId?.price || 0) * item.quantity;
//     }, 0);
//   };


// const handleBuyNow = async (productId, quantity) => {
//   const selectedItem = cartItems.find((item) => item.productId._id === productId);
//   const token = localStorage.getItem("token");
//   const userId = localStorage.getItem("userId");
//   const totalAmount = selectedItem.productId.price * quantity;

//   try {
//     const res = await fetch("http://localhost:8080/api/payment/create-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ amount: totalAmount * 100 }),
//     });

//     const orderData = await res.json();

//     handlePayment(orderData, async (paymentResponse) => {
//       const verifyRes = await fetch("http://localhost:8080/api/payment/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token ? `Bearer ${token}` : "", // ✅ add this line
//         },
//         body: JSON.stringify(paymentResponse),
//       });

//       const verifyResult = await verifyRes.json();

//       if (verifyResult.success) {
//         alert("Payment successful 🎉");
//         window.location.href = "/dashboard/orders";
//       } else {
//         alert("Payment verification failed ❌");
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     alert("Payment initiation failed");
//   }
// };

//   return (
//     <div className="min-h-screen bg-[#fff4e3] flex flex-col items-center py-16 px-4">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-serifHeading font-bold mb-10 text-yellow-600 text-center"
//       >
//         🛒 Your Cart
//       </motion.h2>

//       {cartItems.length === 0 ? (
//         <p className="text-lg text-gray-700 bg-white/70 px-6 py-4 rounded-xl shadow-md">
//           Your cart is empty.
//         </p>
//       ) : (
//         <div className="w-full max-w-5xl space-y-6">
//           {cartItems.map((item) => (
//             <motion.div
//               key={item._id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="flex flex-col md:flex-row items-center justify-between bg-white/90 border border-yellow-200 rounded-3xl p-6 shadow-lg backdrop-blur-md"
//             >
//               <div className="flex items-center space-x-6">
//                 <img
//                   src={item.productId?.images?.[0] || "https://via.placeholder.com/100"}
//                   alt={item.productId?.name}
//                   className="w-28 h-28 object-cover rounded-2xl border border-yellow-100"
//                 />
//                 <div>
//                   <h3 className="text-xl font-serifHeading font-semibold text-slate-900">
//                     {item.productId?.name}
//                   </h3>
//                   <p className="text-slate-700 mt-1">
//                     Price: <span className="font-medium text-yellow-600">₹{item.productId?.price}</span>
//                   </p>
//                   <p className="text-slate-700">Quantity: {item.quantity}</p>
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row gap-3 mt-6 md:mt-0">
//                 <button
//                   onClick={() => handleBuyNow(item.productId?._id, item.quantity)}
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full font-medium shadow-md transition-all"
//                 >
//                   Buy Now
//                 </button>

//                 <button
//                   onClick={() => removeFromCart(item.productId?._id)}
//                   className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium shadow-md transition-all"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </motion.div>
//           ))}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-2xl font-bold text-right mt-10 text-slate-800"
//           >
//             Total:{" "}
//             <span className="text-yellow-600">
//               ₹{getTotal().toFixed(2)}
//             </span>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React from "react";
import axios from "axios";
import { useCart } from "./CartProvider";
import { motion } from "framer-motion";
import { handlePayment } from "../../utils/razorpay";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotal = () =>
    cartItems.reduce(
      (total, item) => total + (item.productId?.price || 0) * item.quantity,
      0
    );

  const handleBuyNow = async (productId, quantity) => {
    const selectedItem = cartItems.find(
      (item) => item.productId._id === productId
    );
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const totalAmount = selectedItem.productId.price * quantity;

    try {
      console.log("📦 Sending create-order request:", {
        userId,
        totalAmount,
        productId: selectedItem.productId._id,
        price: selectedItem.productId.price,
      });

      const { data } = await axios.post(
        "http://localhost:8080/api/payment/create-order",
        {
          totalAmount,
          items: [
            {
              productId: selectedItem.productId._id, // ✅ matches schema
              quantity: selectedItem.quantity,
              price: selectedItem.productId.price, // ✅ added
            },
          ],
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Order created successfully:", data);
      handlePayment(data, () => (window.location.href = "/dashboard/orders"));
    } catch (error) {
      console.error("💥 Payment initiation failed:", error);
      alert(error.response?.data?.message || "Payment initiation failed");
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
                  src={
                    item.productId?.images?.[0] ||
                    "https://via.placeholder.com/100"
                  }
                  alt={item.productId?.name}
                  className="w-28 h-28 object-cover rounded-2xl border border-yellow-100"
                />
                <div>
                  <h3 className="text-xl font-serifHeading font-semibold text-slate-900">
                    {item.productId?.name}
                  </h3>
                  <p className="text-slate-700 mt-1">
                    Price:{" "}
                    <span className="font-medium text-yellow-600">
                      ₹{item.productId?.price}
                    </span>
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
            <span className="text-yellow-600">₹{getTotal().toFixed(2)}</span>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;

