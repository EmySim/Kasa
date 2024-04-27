import React from "react";
import starActive from "../../assets/starActive.png";
import starInactive from "../../assets/starInactive.png";
import "./Stars.css";

function Stars({ rating }) {
 
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starActive : starInactive}
        alt={i <= rating ? "star-active" : "star-inactive"}
        className="star-icon"
      />
    );
  }

  return <div className="star-icon">{stars}</div>;
}

export default Stars;