import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Host from "../components/Host";
import "./Logement.css";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((item) => item.id === id);

        if (!foundLogement) {
          setNotFound(true);
        } else {
          setLogement(foundLogement);
        }
      });
  }, [id]);

  if (notFound) {
    return <Navigate to="/erreur-logement" replace />;
  }
  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <main className="logement">
      <img
        src={logement.cover}
        alt={logement.title}
        className="logement__cover"
      />

      <section className="logement__header">
        <div className="logement__infos">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating value={logement.rating} />
        </div>
      </section>

      <section className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={logement.equipments.join(", ")}
        />
      </section>
    </main>
  );
}

export default Logement;
