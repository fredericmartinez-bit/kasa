import "./Home.css";
import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import homeImg from "../assets/home-banner.png";

function Home() {
  const [logements, setLogements] = useState([]); // Pour stocker la liste des apparts

  useEffect(() => {
    // On va chercher les données sur le serveur Docker
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur Docker:", error));
  }, []);

  return (
    <div className="home">
      <Banner image={homeImg} text="Chez vous, partout et ailleurs" />
      <div className="logements-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
