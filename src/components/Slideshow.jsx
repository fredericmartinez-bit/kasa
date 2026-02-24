import React, { useState } from "react";
import "./Slideshow.css";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length,
    );
  };

  if (pictures.length <= 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshow-img" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt="Logement"
        className="slideshow-img"
      />
      <button className="arrow arrow-left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow arrow-right" onClick={nextSlide}>
        ❯
      </button>
      <div className="counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
