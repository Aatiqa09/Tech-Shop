import RatingStars from "./RatingStars";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const discount = Math.round(
    ((product.originalPrice - product.finalPrice) / product.originalPrice) * 100
  );

  return (
    <div
      className="bg-gray-900 p-5 rounded border border-gray-700 hover:border-red-500 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.images[0]}
        className="h-40 mx-auto object-contain"
        alt={product.title}
      />

      <p className="text-sm text-gray-400 mt-2">{product.brand}</p>

      <h3 className="font-semibold">{product.title}</h3>

      <p className="text-xs text-gray-400">{product.info}</p>

      <div className="flex items-center gap-2 mt-3">
        <RatingStars count={product.rateCount} />
        <span className="text-xs text-gray-400">
          ({product.ratings})
        </span>
      </div>

      <div className="flex gap-2 items-center mt-2">
        <span className="text-red-500 font-bold">₹{product.finalPrice}</span>
        <span className="line-through text-gray-500 text-sm">
          ₹{product.originalPrice}
        </span>
        <span className="text-green-500 text-sm">{discount}% off</span>
      </div>
    </div>
  );
}