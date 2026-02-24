import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

import aboutBanner from "../assets/about-banner.png";

function About() {
  const values = [
    {
      title: "Fiabilité",
      content:
        "Les annonces sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité du service est au cœur de notre engagement. Nous veillons à ce que chaque séjour soit une expérience inoubliable pour nos voyageurs.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
    },
  ];

  return (
    <div className="about-container">
      {/* On utilise ta bannière avec l'image de la montagne */}
      <Banner image={aboutBanner} title="" />

      <div
        className="about-collapses"
        style={{
          padding: "0 100px",
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {values.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
