import React from "react";
import "./Gallery.css";

function Gallery({ cover, pictures }) {
  
  

  return (
    <div className="gallery-container">
      
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
     
    </div>
  );
}

export default Gallery;
