import { Star } from "lucide-react";

export const StarRating = ({ rating, count }: { rating: number, count: number }) => {
  // Create array of 5 items to map
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      <div className="flex text-black">
        {stars.map((star) => (
          <div key={star} className="relative">
            {/* Empty Star base */}
            <Star size={14} className="text-gray-300 fill-gray-300" />
            {/* Filled Star overlay based on rating */}
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: rating >= star ? '100%' : rating > star - 1 ? '50%' : '0%' }}>
              <Star size={14} className="text-black fill-black" />
            </div>
          </div>
        ))}
      </div>
      <span className="text-[10px] text-gray-400 font-medium tracking-wide">
        {count} REVIEW(S)
      </span>
    </div>
  );
};

