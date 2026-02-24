import React, { useState } from "react";
import "./Collapse.css";
// import arrowIcon from "../assets/arrow-collapse.png"; // <-- On commente cette ligne pour l'instant

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        {/* On remplace la balise <img> par un <span> avec un symbole texte */}
        <span
          className={`collapse-arrow ${isOpen ? "opened" : ""}`}
          style={{
            color: "white",
            fontSize: "28px",
            display: "inline-block",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            fontWeight: "bold",
          }}
        >
          ⌄
        </span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
