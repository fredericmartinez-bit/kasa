import React from "react";
import "./Footer.css";
import logoFooter from "../assets/logo.png"; // Ou utilise le même logo si tu n'as pas le blanc

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
