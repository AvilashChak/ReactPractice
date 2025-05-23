import React, { useEffect, useState } from "react";
import "../css/ImageCarousel.css";

const images = [
  "https://picsum.photos/id/1018/1000/600",
  "https://picsum.photos/id/1015/1000/600",
  "https://picsum.photos/id/1019/1000/600",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="left-arrow" onClick={goToPrevious}>
        ❮
      </div>
      <div className="right-arrow" onClick={goToNext}>
        ❯
      </div>

      <div
        className="carousel-slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
