import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <>
      <Banner />
      <h1>Accueil</h1>

      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </>
  );
}

export default Home;
