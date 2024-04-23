import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

function Gallery({ cover, pictures }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
  };
  

  return (
    <div className="gallery-container">
      <Slider {...settings}>
    
        <div key="cover">
          <img src={cover} alt="Cover" className="gallery-image" />
        </div>
   

        {pictures.map((picture, index) => (
          <div key={index}>
            <img
              src={picture}
              alt={`Appartement ${index}`}
              className="gallery-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;
