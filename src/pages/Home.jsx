import React, { useState } from "react";
import productsData from "./productsData";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import RatingStars from "../components/RatingStars";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
  return (
    <div className="px-6 md:px-12 py-8">
      <div className="flex flex-wrap gap-4 mb-8">
        {["all", "earbuds", "earphones", "headphones", "neckbands"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded font-semibold ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-red-600"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        )}
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const isInCart = cart.find((i) => i.id === product.id);

          const discount = Math.round(
            ((product.originalPrice - product.finalPrice) /
              product.originalPrice) *
              100
          );
          return (
            <article
              key={product.id}
              className="bg-black text-white border border-gray-800 hover:border-red-500 rounded overflow-hidden shadow-lg transition"
            >
              <div
                className="w-full h-64 cursor-pointer bg-white"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.images?.[0] || product.heroImage}
                  alt={product.title}
                  className="w-full h-full object-contain p-3"
                />
              </div>

              <div className="px-3 py-4 space-y-1">

                <p className="text-sm text-gray-400">{product.brand}</p>

                <p className="font-semibold text-sm line-clamp-2">
                  {product.title}
                </p>

                <p className="text-xs text-gray-400">
                  {product.info}
                </p>
                <div className="flex items-center gap-2">
                  <RatingStars count={product.rateCount} />
                  <span className="text-xs text-gray-400">
                    ({product.ratings})
                  </span>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <span className="text-white-500 font-bold">
                    ₹{product.finalPrice.toLocaleString()}
                  </span>
                  <span className="line-through text-gray-500 text-sm">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.finalPrice,
                      image: product.images?.[0] || product.heroImage,
                    })
                  }
                  className={`p-3 w-full mt-3 rounded font-semibold ${
                    isInCart
                      ? "bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {isInCart ? "Added" : "Add To Cart"}
                </button>
              </div>
            </article>
          );
        })}
        <article
          onClick={() => {
            setSelectedCategory("all");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="bg-black text-white border border-gray-700 hover:border-red-500 rounded flex items-center justify-center cursor-pointer transition min-h-[380px]"
        >
          <div className="text-center">
            <p className="text-xl font-semibold">Browse All Products →</p>
            <p className="text-gray-400 text-sm mt-2">
              View complete collection
            </p>
          </div>
        </article>

      </section>
    </div>
  );
}