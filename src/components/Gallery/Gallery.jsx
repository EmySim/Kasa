import React, { useState } from "react";
import "./Gallery.css";
import arrowSlider from "../../assets/arrowSlider.png";

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">

      <div className="gallery">
        <button onClick={prevSlide} className="arrow prev">
          <img src={arrowSlider} alt="Previous" />
        </button>

        {pictures.map((picture, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {index === currentIndex && (
              <img
                src={picture}
                alt={`Appartement ${index}`}
                className="flat-pictures"
              />
            )}
          </div>
        ))}

        <button onClick={nextSlide} className="arrow next">
          <img src={arrowSlider} alt="Next" />
        </button>

        <div className="counter">
          {currentIndex + 1} / {pictures.length}
        </div>

      </div>

    </div>
  );
}

export default Gallery;
