import React from "react";
import "./Banner.css";

function Banner({ backgroundImage, label }) {
  return (
    <div className="banner">
      <img src={backgroundImage} alt="" />
      <div className="overlay">
      {label && <h1>{label}</h1>}
      </div>
    </div>
  );
}

export default Banner;
