import React from 'react'
import "./Gallery.css";
import accomodation from "../../assets/accomodation.jpeg";

function Gallery({ picture }) {
  return (
    <div className='gallery-container'>
       <img src={picture} alt="image appartement" className="flat-image" />
    </div>
  )
}

export default Gallery
