import React from "react";
import { NavLink } from "react-router-dom"; // On remplace Link par NavLink
import logo from "../assets/LOGO.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
      <nav className="header-nav">
        {/* NavLink ajoute automatiquement la classe "active" quand on est sur la page */}
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
