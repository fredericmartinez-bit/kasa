import { useState } from "react";
import "./Collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="collapse">
      <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="collapse__icon">{isOpen ? "˅" : "˄"}</span>
      </button>

      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </section>
  );
}

export default Collapse;
