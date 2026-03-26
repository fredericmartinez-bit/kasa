import { useState } from "react";
import "./Carousel.css";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={title}
        className="carousel__image"
      />

      {pictures.length > 1 && (
        <>
          <button
            className="carousel__button carousel__button--left"
            onClick={previousSlide}
          >
            ‹
          </button>

          <button
            className="carousel__button carousel__button--right"
            onClick={nextSlide}
          >
            ›
          </button>

          <div className="carousel__counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </section>
  );
}

export default Carousel;
