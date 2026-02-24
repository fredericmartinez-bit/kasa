import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    // On entoure la carte avec un lien qui mène vers la page de l'appartement
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-img" />
      <div className="card-overlay"></div>
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export default Card;
