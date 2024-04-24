import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <div className="Card">
      <Link to={`/Logement/${id}`}>
        <img src={cover} alt="texte" />
        <div id="overlay"></div>
        <p className="title">{title}</p>
      </Link>
    </div>
  );
}

export default Card;
