import { FaStar } from "react-icons/fa";

export default function RatingStars({ count }) {
  return (
    <div className="flex gap-2 text-red-500">
      {[1,2,3,4,5].map(num => (
        <FaStar key={num} className={num <= count ? "" : "opacity-30"} />
      ))}
    </div>
  );
}