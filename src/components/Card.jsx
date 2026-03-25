import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <article>
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </Link>
    </article>
  );
}

export default Card;
