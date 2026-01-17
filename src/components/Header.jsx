import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import ContactModal from "./ContactModal";

const products = [
  "boAt Airdopes 131",
  "boAt Rockerz 203",
  "boAt BassHeads 228",
  "boAt Rockerz 255",
  "boAt Rockerz 381",
  "boAt Rockerz 410",
  "boAt Rockerz 518",
  "JBL Endurance Run",
  "JBL Wave 100",
  "JBL 200BT",
  "JBL 500BT",
  "JBL Live 660NC",
  "JBL Tune 760NC",
  "Sony EX14AP Earphones",
  "Sony MDR-1000XM4",
  "Sony CH710N",
  "Sony XB400 Headphones"
];

export default function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [showContact, setShowContact] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const totalItems = cart.reduce((t, i) => t + i.quantity, 0);

  const filtered = products.filter(p =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-black text-white relative">

        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Tech-Shop
        </h1>

        {/* CENTER SEARCH BAR */}
        {showSearch && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-96 z-50 w-160">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white outline-none border border-gray-700"
              autoFocus
            />

            {query && (
              <div className="bg-black border border-gray-700 rounded mt-1 shadow-lg">
                {filtered.length > 0 ? (
                  filtered.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 text-gray-300 cursor-pointer hover:text-red-500 transition"
                      onClick={() => {
                        setQuery(item);
                        setShowSearch(false);
                      }}
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <p className="px-4 py-2 text-gray-500">No results found</p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-6 ">

          {/* 🔍 SEARCH ICON */}
          <div
            className="relative group cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch size={18} />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition ">
              Search
            </span>
          </div>

          {/* 🛒 CART */}
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart size={20} />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Cart
            </span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </div>

          {/* 👤 ACCOUNT */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setShowLogin(true)}
            onMouseLeave={() => setShowLogin(false)}
          >
            <FaUser size={20} />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Account
            </span>

            {showLogin && (
              <div className="absolute right-0 mt-3 w-64 bg-gray-900 rounded-lg shadow-lg p-4 z-50">
                <p className="text-sm text-gray-400 mb-2">
                  Hello! <br /> Access account and manage orders
                </p>

                <button
                  onClick={() => {
                    setShowLogin(false);
                    setShowContact(true);
                  }}
                  className="w-full border border-gray-600 py-2 rounded hover:border-red-500 hover:text-red-500 transition"
                >
                  Login / Signup
                </button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  Please Login
                </p>
              </div>
            )}
          </div>

        </div>
      </header>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}