// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Order = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please login to view your orders");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get("https://savitri-jewellers-backend.onrender.com/api/orders", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setOrders(response.data);
//     } catch (err) {
//       setError("Failed to fetch orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePayment = async (amount, orderId) => {
//     try {
//       const res = await fetch("https://savitri-jewellers-backend.onrender.com/api/payment/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: data.amount,
//         currency: "INR",
//         name: "Savitri Jewellers",
//         description: `Payment for Order ID: ${orderId}`,
//         order_id: data.id,
//         handler: async (response) => {
//           const verifyRes = await fetch("https://savitri-jewellers-backend.onrender.com/api/payment/verify", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ ...response, orderId }),
//           });

//           const result = await verifyRes.json();
//           alert(result.message || "Payment successful! Order marked as received.");
//           fetchOrders(); // refresh orders after payment
//         },
//         theme: { color: "#F37254" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       alert("Error initiating payment. Please try again.");
//     }
//   };

//   if (loading)
//     return <p className="text-center text-gray-600 mt-10">Loading orders...</p>;

//   if (error)
//     return <p className="text-center text-red-500 mt-10">{error}</p>;

//   return (
//     <div className="container mx-auto mt-10 p-6">
//       <h2 className="text-2xl font-semibold text-center mb-6 mt-5">Your Orders</h2>

//       {orders.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div key={order._id} className="bg-white p-6 shadow-lg rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Order ID: {order._id}</h3>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Total Amount:</span> ₹{order.totalAmount}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Status:</span>{" "}
//                 <span
//                   className={`px-2 py-1 rounded-lg text-white ${
//                     order.status === "Pending"
//                       ? "bg-yellow-500"
//                       : order.status === "Completed"
//                       ? "bg-green-500"
//                       : "bg-red-500"
//                   }`}
//                 >
//                   {order.status === "Completed" ? "Received" : order.status}
//                 </span>
//               </p>

//               <h4 className="mt-4 font-semibold">Products:</h4>
//               <ul className="mt-2">
//                 {order.products.map((item) => (
//                   <li
//                     key={item.product._id}
//                     className="flex items-center gap-3 border-b py-2"
//                   >
//                     <img
//                       src={item.product.images?.[0] || "https://via.placeholder.com/50"}
//                       alt={item.product.name}
//                       className="w-12 h-12 rounded-md object-cover"
//                     />
//                     <span className="text-gray-800">{item.product.name}</span> -{" "}
//                     <span className="text-gray-600">{item.quantity} pcs</span>
//                   </li>
//                 ))}
//               </ul>

//               {order.status === "Pending" && (
//                 <button
//                   onClick={() => handlePayment(order.totalAmount * 100, order._id)}
//                   className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
//                 >
//                   Buy Now
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-600">No orders found</p>
//       )}
//     </div>
//   );
// };

// export default Order;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import io from "socket.io-client";
import { useAuth } from "../App";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080";
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || API_BASE;
const steps = ["ordered", "processing", "shipped", "delivered"];

const ProgressDots = ({ status }) => {
  const idx = Math.max(0, steps.indexOf((status || "").toLowerCase()));
  return (
    <div className="flex items-center space-x-3 mt-3">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center">
          <div
            title={s}
            className={`w-4 h-4 rounded-full ${i <= idx ? "bg-yellow-500" : "bg-gray-300"}`}
          />
          {i < steps.length - 1 && (
            <div className={`h-1 ${i < idx ? "bg-yellow-400" : "bg-gray-200"} w-16 mx-3`} />
          )}
        </div>
      ))}
    </div>
  );
};

const Order = () => {
  const { user, token: authToken } = useAuth ? useAuth() : { user: null, token: null };
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = authToken || localStorage.getItem("token");
  const userId = user?._id || JSON.parse(localStorage.getItem("user") || "{}")._id;

  useEffect(() => {
    if (!userId || !token) {
      setError("Please login to view your orders");
      setLoading(false);
      return;
    }

    let socket;
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE}/api/orders/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch orders", err);
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();

    // real-time updates via socket.io (backend must set io on app and emit)
    try {
      socket = io(SOCKET_URL, { transports: ["websocket"] });
      socket.on("connect", () => {
        socket.emit("joinUserRoom", userId);
      });
      socket.on("orderCreated", (newOrder) => {
        // ensure order belongs to this user before adding
        if (!newOrder) return;
        const owner = newOrder.user || (newOrder.user && newOrder.user._id);
        if (String(owner) === String(userId) || !owner) {
          setOrders((prev) => [newOrder, ...prev]);
        }
      });
      socket.on("orderUpdated", (updatedOrder) => {
        setOrders((prev) => prev.map((o) => (o._id === updatedOrder._id ? updatedOrder : o)));
      });
    } catch (err) {
      console.warn("Socket init failed", err);
    }

    return () => {
      if (socket) {
        socket.emit("leaveUserRoom", userId);
        socket.disconnect();
      }
    };
  }, [userId, token]);

  const handlePayment = async (amountInPaise, orderId) => {
    try {
      const res = await fetch(`${API_BASE}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInPaise }),
      });
      const data = await res.json();
      if (!data || !data.amount) throw new Error("Payment init failed");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Savitri Jewellers",
        description: `Payment for Order ${orderId}`,
        order_id: data.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch(`${API_BASE}/api/payment/verify`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : undefined,
              },
              body: JSON.stringify({ ...response, orderId }),
            });
            const result = await verifyRes.json();
            alert(result.message || "Payment successful");
            // refresh orders after verification
            const refreshed = await axios.get(`${API_BASE}/api/orders/user/${userId}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            setOrders(Array.isArray(refreshed.data) ? refreshed.data : []);
          } catch (err) {
            console.error("Verify failed", err);
            alert("Payment verification failed");
          }
        },
        theme: { color: "#F5C518" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment initiation error", err);
      alert("Error initiating payment. Please try again.");
    }
  };

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading orders...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="min-h-screen bg-[#fff4e3] flex flex-col items-center py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-serifHeading font-bold mb-8 text-yellow-600 text-center"
      >
        📦 Your Orders
      </motion.h2>

      {orders.length === 0 ? (
        <p className="text-lg text-gray-700 bg-white/70 px-6 py-4 rounded-xl shadow-md">
          No orders yet.
        </p>
      ) : (
        <div className="w-full max-w-5xl space-y-6">
          {orders.map((order) => {
            const items = order.items || [];
            const total =
              order.totalAmount ??
              items.reduce(
                (sum, it) =>
                  sum + (it.productId?.price ?? it.price ?? 0) * (it.quantity ?? 0),
                0
              );
            const status = (order.status || "").toLowerCase();

            return (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white/90 border border-yellow-200 rounded-3xl p-6 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      src={
                        items[0]?.productId?.images?.[0] ||
                        "https://via.placeholder.com/80"
                      }
                      alt={items[0]?.productId?.name || "product"}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Order #{order._id.slice(-6)}{" "}
                        <span className="text-sm font-medium text-slate-600">
                          {new Date(order.createdAt).toLocaleString()}
                        </span>
                      </h3>

                      <div className="text-slate-700 mt-2 space-y-2">
                        {items.map((it) => (
                          <div key={String(it.productId?._id || it.productId)} className="flex items-center">
                            <span className="font-medium">{it.productId?.name || "Product"}</span>
                            <span className="ml-3 text-sm text-slate-600">x{it.quantity}</span>
                            <span className="ml-4 text-yellow-600 font-semibold">
                              ₹{((it.productId?.price ?? it.price) * it.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-slate-800 font-bold">Total: ₹{Number(total).toFixed(2)}</div>
                    <div className="text-sm text-slate-600 mt-2 capitalize">Status: {status}</div>
                  </div>
                </div>

                <ProgressDots status={status} />

                {status === "ordered" || status === "pending" ? (
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => handlePayment(Math.round(Number(total) * 100), order._id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-medium"
                    >
                      Pay Now
                    </button>
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Order;