import { useCart } from "../context/CartContext";
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const originalPrice = cart.reduce(
    (acc, item) => acc + (item.originalPrice || 0) * item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  const discount = originalPrice - totalPrice;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center p-20 text-white">
        <BsCartX className="text-red-500 text-9xl" />
        <p className="text-3xl mt-4">Your cart is empty</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-red-600 px-6 py-3 rounded"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-10 gap-6 text-white">
      <div className="flex-1 bg-gray-900 p-4 rounded">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-700 py-5"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-red-500 font-bold">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 bg-gray-700 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 bg-gray-700 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 ml-2"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/3 bg-gray-900 p-4 rounded flex flex-col gap-4">
        <h2 className="font-bold text-xl">Order Summary ({cart.length} items)</h2>

        <div className="flex justify-between">
          <span>Original Price</span>
          <span>₹{originalPrice}</span>
        </div>

        <div className="flex justify-between text-green-500">
          <span>Discount</span>
          <span>-₹{discount}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-500">Free</span>
        </div>

        <div className="flex justify-between font-bold text-lg border-t border-gray-700 pt-2">
          <span>Total Price</span>
          <span>₹{totalPrice}</span>
        </div>

        <button className="bg-red-600 hover:bg-red-700 py-2 rounded font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
}