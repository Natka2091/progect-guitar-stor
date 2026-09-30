type RatingProps = {
  rating: number;
  reviews: number;
};

export function Rating({ rating, reviews }: RatingProps) {
  return (
    <div className="flex items-center">
      <span className="flex text-[#F4B83F]">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= rating ? "★" : "☆"}
          </span>
        ))}
      </span>

      <span className="ml-1 text-gray-400">
        {reviews}
      </span>
    </div>
  );
}