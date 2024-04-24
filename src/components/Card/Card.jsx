import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <div className="card">
      <Link to={`/Logement/${id}`}>
      <div className="image-container">
        <img src={cover} alt="texte" className="card-image" />
        <div id="overlay"></div>
        <p className="title">{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
