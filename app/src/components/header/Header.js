import React, { useState, useEffect, useRef } from "react";
import "./header.scss";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Utilisation de useRef pour référencer le menu

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollEvent = () => {
    if (window.scrollY > 50) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    // Ferme le menu si l'utilisateur fait défiler la page
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const toggleMenu = (event) => {
    event.stopPropagation(); // Empêche la propagation de l'événement pour éviter la fermeture immédiate du menu
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    // Vérifie si le clic s'est produit en dehors de la zone du menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false); // Ferme le menu si le clic est en dehors de la zone du menu
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    document.addEventListener("click", handleClickOutside); // Ajoute un gestionnaire d'événements pour détecter les clics en dehors du menu
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
      document.removeEventListener("click", handleClickOutside); // Nettoie le gestionnaire d'événements lors du démontage du composant
    };
  }, [showMenu]); // Ajoute showMenu comme dépendance pour que l'effet soit réexécuté lorsque showMenu change

  return (
    <>
      {showHeader ? (
        <header className="header">
          <nav>
            <ul className="header_links">
              <li className="header_link">
                <a href="#home" onClick={() => handleScroll("home")}>
                  Acceuil
                </a>
              </li>
              <li className="header_link">
                <a href="#about" onClick={() => handleScroll("about")}>
                  A propos
                </a>
              </li>
              <li className="header_link">
                <a href="#skills" onClick={() => handleScroll("skills")}>
                  Compétences
                </a>
              </li>
              <li className="header_link">
                <a href="#portfolio" onClick={() => handleScroll("portfolio")}>
                  Portfolio
                </a>
              </li>
              <li className="header_link">
                <a href="#contact" onClick={() => handleScroll("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <div className="hamburger-menu">
          <button className="hamburger-button" onClick={toggleMenu}>
            ☰
          </button>
          {showMenu && (
            <ul className="hamburger-links" ref={menuRef}>
              <li className="hamburger-link">
                <a href="#home" onClick={() => handleScroll("home")}>
                  Acceuil
                </a>
              </li>
              <li className="hamburger-link">
                <a href="#about" onClick={() => handleScroll("about")}>
                  A propos
                </a>
              </li>
              <li className="hamburger-link">
                <a href="#skills" onClick={() => handleScroll("skills")}>
                  Compétences
                </a>
              </li>
              <li className="hamburger-link">
                <a href="#portfolio" onClick={() => handleScroll("portfolio")}>
                  Portfolio
                </a>
              </li>
              <li className="hamburger-link">
                <a href="#contact" onClick={() => handleScroll("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
