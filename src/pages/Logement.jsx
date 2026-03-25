import Collapse from "../components/Collapse";

function Logement() {
  return (
    <>
      <h1>Logement</h1>
      <Collapse title="Description" content="Description du logement." />
      <Collapse title="Équipements" content="Liste des équipements." />
    </>
  );
}

export default Logement;
