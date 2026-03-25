import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`} className="card__link">
        <img src={cover} alt={title} className="card__image" />
        <div className="card__overlay"></div>
        <h2 className="card__title">{title}</h2>
      </Link>
    </article>
  );
}

export default Card;
