import { NavLink } from "react-router-dom";
import "./Header.css";
import logoKasa from "../assets/logo-kasa.png";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logoKasa} alt="Kasa" className="header__logo" />
      </NavLink>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
