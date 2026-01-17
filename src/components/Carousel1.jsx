import React, { useEffect, useState } from "react";

const products = [
  { id: 1, name: "boAt Rockerz 518", image: "/images/products/boat518-1.png", price: 999, oldPrice: 1999 },
  { id: 2, name: "JBL Tune 760NC", image: "/images/products/jbl760nc-1.png", price: 1299, oldPrice: 2499 },
  { id: 3, name: "boAt Rockerz 255R", image: "/images/products/boat255r-1.png", price: 1599, oldPrice: 2999 },
  { id: 4, name: "JBL Endurance Run", image: "/images/products/jbl-endu-1.png", price: 1999, oldPrice: 3499 },
  { id: 5, name: "boAt Rockerz 410", image: "/images/products/boat410-1.png", price: 2299, oldPrice: 3999 },
  { id: 6, name: "boAt Airdopes 203", image: "/images/products/boat203-1.png", price: 2799, oldPrice: 4499 },
  
];

export default function Carousel() {
  const visible = 5;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === products.length - visible ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen bg-black py-12 overflow-hidden">
      <div className="relative px-8">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 20}%)` }}
        >
          {products.map((item) => (
            <div key={item.id} className="w-1/5 px-3 flex-shrink-0">
              <div className="text-center bg-black rounded-xl p-4">

                <p className="text-gray-400 text-sm mb-3">{item.name}</p>

                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto h-50 object-contain"
                />

                <div className="flex justify-center gap-2 mt-3">
                  <span className="text-white font-bold">₹{item.price}</span>
                  <span className="text-gray-500 line-through text-sm">
                    ₹{item.oldPrice}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {[0,1,2,3,4].map((dot) => (
          <button
            key={dot}
            onClick={() => setIndex(dot)}
            className={`w-3 h-3 rounded-full ${
              index === dot ? "bg-red-500 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
}