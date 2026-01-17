import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
export default function ContactModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-black text-white w-full max-w-md rounded-lg p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          <RiCloseLine />
        </button>
        <h2 className="text-2xl font-bold mb-1">
          {isLogin ? "Login" : "Signup"}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {isLogin ? (
            <>
              New to Tech-Shop?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-red-500 hover:underline"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-red-500 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-gray-600 px-4 py-2 rounded outline-none focus:border-red-500"
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black border border-gray-600 px-4 py-2 rounded outline-none focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-gray-600 px-4 py-2 rounded outline-none focus:border-red-500"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-black border border-gray-600 px-4 py-2 rounded outline-none focus:border-red-500"
            />
          )}
          <button
            type="submit"
            className="w-full bg-red-600 py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="text-center text-gray-400 my-4">
          ——— or login with ———
        </p>
        <div className="flex justify-between gap-3">
          <button className="flex items-center justify-center gap-2 w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
            <FaFacebookF /> Facebook
          </button>
          <button className="flex items-center justify-center gap-2 w-full bg-red-500 py-2 rounded hover:bg-red-600">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full bg-sky-500 py-2 rounded hover:bg-sky-600">
            <FaTwitter /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
}