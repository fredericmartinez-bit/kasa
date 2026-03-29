import "./Footer.css";
import logoWhite from "../assets/logo-kasa-white.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Kasa" className="footer__logo" />
      <p className="footer__text">
        <span>© 2020 Kasa. All</span>
        <span className="footer__text-break">rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer;
