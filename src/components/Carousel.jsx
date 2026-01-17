import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Carousel() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Sony WH-XB910N",
      description: "Give Your Favourite Music A Boost.",
      price: "₹13,489",
      oldPrice: "₹19,990",
      image: "public/images/products/sonyXb910n-1.png",
    },
    {
      id: 2,
      title: "JBL Live 660NC",
      description: "Keep The Noise Out, Or IN, You Choose",
      price: "₹24,999",
      oldPrice: "₹29,999",
      image: "public/images/products/jbl660nc-1.png",
    },
    {
      id: 3,
      title: "boAt Airpodes 131",
      description: "Featherweight For Comfort All-Day.",
      price: "₹59,900",
      oldPrice: "₹64,999",
      image: "public/images/products/boat131-3.png",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-screen overflow-hidden">
      <div className="relative h-[340px] md:h-[440px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-800 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="h-full w-full bg-gradient-to-r from-black via-gray-900 to-black flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
              <div className="text-white space-y-3 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-gray-300">
                  {slide.description}
                </p>
                <div className="flex gap-4 items-center">
                  <span className="text-red-500 font-bold text-xl">
                    {slide.price}
                  </span>
                  <span className="line-through text-gray-500">
                    {slide.oldPrice}
                  </span>
                </div>
                <button
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded mt-3"
                  onClick={() => navigate(`/product/${slide.id}`)}
                >
                  Shop Now
                </button>
              </div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[260px] md:w-[420px] object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
        <button
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full z-20"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full z-20"
        >
          ❯
        </button>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-red-500 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}