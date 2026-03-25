import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <main className="home">
      <Banner />

      <section className="home__gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
