import React, { useState, useEffect, useRef } from "react";
import "./header.scss";

// Composant Header
const Header = () => {
  // État pour contrôler l'affichage du header complet
  const [showHeader, setShowHeader] = useState(true);

  // État pour contrôler l'affichage du menu hamburger
  const [showMenu, setShowMenu] = useState(false);

  // Référence pour détecter si le clic est à l'extérieur du menu
  const menuRef = useRef(null);

  // Fonction pour effectuer un scroll vers un élément spécifique sur la page
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll en douceur
    }
  };

  // Fonction pour gérer l'événement de scroll et cacher le header lorsque la page est scrollée
  const handleScrollEvent = () => {
    if (window.scrollY > 50) {
      setShowHeader(false); // Masque le header si le scroll dépasse 50px
    } else {
      setShowHeader(true); // Affiche le header si le scroll est en haut de la page
    }

    if (showMenu) {
      setShowMenu(false); // Ferme le menu si un scroll est détecté
    }
  };

  // Fonction pour basculer l'affichage du menu hamburger
  const toggleMenu = (event) => {
    event.stopPropagation(); // Empêche la propagation du clic
    setShowMenu(!showMenu); // Inverse l'état du menu
  };

  // Fonction pour fermer le menu si un clic à l'extérieur est détecté
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false); // Ferme le menu si le clic n'est pas sur le menu
    }
  };

  // useEffect pour ajouter les écouteurs d'événements lors du montage du composant et les retirer lors du démontage
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent); // Ajoute un listener pour le scroll
    document.addEventListener("click", handleClickOutside); // Ajoute un listener pour détecter les clics en dehors du menu

    return () => {
      window.removeEventListener("scroll", handleScrollEvent); // Supprime le listener pour le scroll
      document.removeEventListener("click", handleClickOutside); // Supprime le listener des clics externes
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMenu]); // Réexécute l'effet lorsque showMenu change

  return (
    <>
      {showHeader ? ( // Si showHeader est true, afficher le header complet
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
        // Sinon, afficher le menu hamburger
        <div className="hamburger-menu">
          <button className="hamburger-button" onClick={toggleMenu}>
            ☰ {/* Icône de menu hamburger */}
          </button>
          {showMenu && ( // Si showMenu est true, afficher les liens du menu
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
