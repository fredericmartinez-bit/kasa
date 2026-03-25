import "./AboutBanner.css";
import aboutBanner from "../assets/about-banner.png";

function AboutBanner() {
  return (
    <section
      className="about-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${aboutBanner})`,
      }}
    ></section>
  );
}

export default AboutBanner;
