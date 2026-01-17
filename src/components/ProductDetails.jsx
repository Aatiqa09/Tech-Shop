import { useParams } from "react-router-dom";
import productsData from "../pages/productsData";
import reviewsData from "../data/reviewsData";
import RatingStars from "./RatingStars";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { IoMdContact } from "react-icons/io";

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find(p => p.id == id);
  const { addToCart } = useCart();

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [activeTab, setActiveTab] = useState("Specifications");
  const [activeDot, setActiveDot] = useState(0);
  const [showMsg, setShowMsg] = useState(false);

  const handleBuyNow = (item) => {
    addToCart(item);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 text-white">

    
      {showMsg && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-3 rounded shadow-lg z-50">
          Your order is confirmed ✅
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className="w-20 h-20 object-contain border border-gray-700 p-1 rounded cursor-pointer hover:border-red-500"
              />
            ))}
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img src={mainImage} className="max-h-[450px] object-contain" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-gray-400 text-sm">{product.info}</p>

          <div className="flex items-center gap-2">
            <RatingStars count={product.rateCount} />
            <span className="text-gray-400 text-sm">{product.ratings} Ratings</span>
          </div>

          <hr className="border-gray-700"/>

          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">₹{product.finalPrice}</span>
              <span className="line-through text-gray-500">₹{product.originalPrice}</span>
              <span className="bg-green-600 text-xs px-2 py-1 rounded">✓ In Stock</span>
            </div>

            <p className="text-green-500 text-sm">
              You save ₹{product.originalPrice - product.finalPrice}
            </p>
            <p className="text-gray-500 text-xs">(Inclusive of all taxes)</p>
          </div>

          <hr className="border-gray-700"/>

          <div>
            <p className="text-gray-300 font-medium mb-2">Offers and Discounts</p>
            <div className="flex gap-3">
              <div className="border border-gray-600 px-3 py-2 rounded text-sm">
                No Cost EMI on Credit Card
              </div>
              <div className="border border-gray-600 px-3 py-2 rounded text-sm">
                Pay Later & Avail Cashback
              </div>
            </div>
          </div>

          <hr className="border-gray-700"/>

          
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-red-600 hover:bg-red-700 w-52 py-3 rounded text-white font-semibold"
            >
              Add to cart
            </button>

          </div>

        </div>
      </div>

      <div className="mt-14">
        <div className="flex justify-center gap-8 border-b border-gray-700 pb-3">
          {["Specifications","Overview","Reviews"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded transition ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "Specifications" && (
            <div className="max-w-3xl mx-auto grid grid-cols-2 gap-y-4 text-gray-300 text-sm">
              <p>Brand</p><p className="text-right">{product.brand}</p>
              <p>Category</p><p className="text-right">{product.category}</p>
              <p>Type</p><p className="text-right">{product.type}</p>
              <p>Connectivity</p><p className="text-right">{product.connectivity}</p>
            </div>
          )}

          {activeTab === "Overview" && (
            <div className="max-w-3xl mx-auto text-gray-400 text-sm leading-relaxed space-y-3">
              <p>
                The <span className="text-red-500 font-semibold">{product.title}</span> provides
                fabulous sound quality with premium comfort.
              </p>

              <ul className="list-disc ml-5 space-y-1">
                <li>Sound Tuned to Perfection</li>
                <li>Comfortable to Wear</li>
                <li>Long Hours Playback Time</li>
              </ul>

              <p>{product.info}</p>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {reviewsData.map(r => (
                <div key={r.id} className="flex gap-4 border-b border-gray-700 pb-4">

                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <IoMdContact/>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-semibold text-white">{r.name}</p>
                      <span className="text-xs text-gray-400">{r.date}</span>
                    </div>

                    <RatingStars count={r.rateCount} />

                    <p className="text-gray-300 text-sm mt-1">
                      {r.review}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <h3 className="text-center mt-16 mb-6 text-gray-300 text-lg">
        Related Products
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-5">
        {productsData.slice(0,4).map(item => (
          <div key={item.id} className="border border-gray-700 rounded p-4 hover:shadow-lg">
            <img src={item.images[0]} className="h-32 mx-auto object-contain"/>
            <p className="mt-3 text-sm">{item.title}</p>
            <p className="text-red-500 font-semibold">₹{item.finalPrice}</p>

            
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {[0,1,2].map(dot => (
          <span
            key={dot}
            onClick={() => setActiveDot(dot)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeDot === dot ? "bg-red-600" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>

    </div>
  );
}