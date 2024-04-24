import React from "react";
import "./Gallery.css";
function Gallery({ cover, pictures }) {
  
  

  return (
    <div className="gallery-container">
        {pictures.map((picture, index) => (
          <div key={index}>
            <img
              src={picture}
              alt={`Appartement ${index}`}
              className="flat-pictures"
            />
          </div>
        ))}
    </div>
  );
}

export default Gallery;
