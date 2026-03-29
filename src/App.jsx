import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

function App() {
  const location = useLocation();
  const isLogementPage = location.pathname.startsWith("/logement/");
  const isAboutPage = location.pathname === "/about";

  return (
    <div
      className={
        isLogementPage ? "logement-page" : isAboutPage ? "about-page" : ""
      }
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/erreur-logement" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
