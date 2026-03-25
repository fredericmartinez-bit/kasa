import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements";

function Home() {
  return (
    <>
      <Banner />
      <h1>Accueil</h1>

      {logements.map((logement) => (
        <Card key={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </>
  );
}

export default Home;
