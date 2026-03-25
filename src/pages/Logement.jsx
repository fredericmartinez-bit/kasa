import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import logements from "../data/logements";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <>
      <h1>{logement.title}</h1>

      <img src={logement.cover} alt={logement.title} />

      <Collapse title="Description" content={logement.description} />

      <Collapse title="Équipements" content={logement.equipments.join(", ")} />
    </>
  );
}

export default Logement;
