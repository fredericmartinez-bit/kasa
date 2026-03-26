import "./Footer.css";
import logoWhite from "../assets/logo-kasa-white.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Kasa" className="footer__logo" />
    </footer>
  );
}

export default Footer;
