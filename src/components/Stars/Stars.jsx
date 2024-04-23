import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "./Stars.css";

function Stars({ rating }) {
  // Tableau d'étoiles en fonction du rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i < rating ? solidStar : regularStar}
        className={i < rating ? "orange" : "gray"}
      />
    );
  }

  return <div>{stars}</div>;
}

export default Stars;