import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <p>{content}</p>}
    </section>
  );
}

export default Collapse;
