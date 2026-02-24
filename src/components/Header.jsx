import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
      <nav className="header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
