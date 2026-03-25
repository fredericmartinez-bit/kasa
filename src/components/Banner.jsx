import "./Banner.css";
import homeBanner from "../assets/home-banner.png";

function Banner() {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${homeBanner})`,
      }}
    >
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Banner;
