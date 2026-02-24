import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Logement non trouvé");
        return response.json();
      })
      .then((data) => setLogement(data))
      .catch((error) => {
        console.error(error);
        navigate("/404");
      });
  }, [id, navigate]);

  if (!logement) return <div>Chargement...</div>;

  return (
    <div className="logement-container" style={{ padding: "20px 100px" }}>
      {/* On garde ton Slideshow en haut */}
      <Slideshow pictures={logement.pictures} />

      <div
        className="logement-infos"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "20px",
        }}
      >
        {/* Partie GAUCHE : Titre, Emplacement et Tags */}
        <div className="logement-titre-tags">
          <h1 style={{ color: "#FF6060", margin: "0", fontSize: "36px" }}>
            {logement.title}
          </h1>
          <p style={{ margin: "5px 0 15px 0", fontSize: "18px" }}>
            {logement.location}
          </p>

          <div
            className="logement-tags"
            style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
          >
            {logement.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#FF6060",
                  color: "white",
                  padding: "5px 20px",
                  borderRadius: "15px",
                  fontSize: "14px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partie DROITE : Propriétaire (Hôte) et Rating */}
        <div
          className="logement-host-rating"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            className="logement-host"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                color: "#FF6060",
                textAlign: "right",
                margin: 0,
                fontSize: "18px",
                whiteSpace: "pre-wrap",
              }}
            >
              {logement.host.name.replace(" ", "\n")}
            </p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              style={{ width: "64px", height: "64px", borderRadius: "50%" }}
            />
          </div>

          {/* Affichage des étoiles dynamiques */}
          <div className="logement-rating">
            {[1, 2, 3, 4, 5].map((level) => (
              <span
                key={level}
                style={{
                  color: level <= logement.rating ? "#FF6060" : "#E3E3E3",
                  fontSize: "24px",
                  marginLeft: "5px",
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tes Collapses arrivent juste après */}
      <div
        className="logement-collapses"
        style={{ display: "flex", gap: "80px", marginTop: "30px" }}
      >
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Logement;
