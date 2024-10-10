import React, { useState, useEffect } from "react";
import NavLinks from "../navlinks/NavLinks";
import "./header.scss";

const Header = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600);
  const [menuOpen, setMenuOpen] = useState(false);

  // Détecter les changements de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fonction pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const opacity = Math.min(scrollTop / maxScroll, 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour afficher/fermer le menu hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour effectuer un scroll vers un élément spécifique
  const handleScrollToSection = (id, event) => {
    event.preventDefault();
    setMenuOpen(false); // Ferme le menu après le clic sur un lien
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {isMobileView ? (
        <div className="mobile">
          <button className="mobile_hamburger" onClick={toggleMenu}>
            &#9776; {/* Icône hamburger */}
          </button>
          {menuOpen && (
            <nav className="mobile_menu">
              <NavLinks handleScrollToSection={handleScrollToSection} />
            </nav>
          )}
        </div>
      ) : (
        <header
          className="header"
          style={{ backgroundColor: `rgba(245, 245, 220, ${scrollOpacity})` }}
        >
          <nav>
            <NavLinks handleScrollToSection={handleScrollToSection} />
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
