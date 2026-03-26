import "./Rating.css";

function Rating({ value }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star}
          className={
            star <= Number(value)
              ? "rating__star rating__star--active"
              : "rating__star"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
