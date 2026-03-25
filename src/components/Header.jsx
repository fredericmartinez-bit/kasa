import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Kasa</div>

      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>

        <NavLink to="/about" className="header__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
