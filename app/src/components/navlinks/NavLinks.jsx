import React from "react";

const NavLinks = ({ handleScrollToSection }) => {
  return (
    <ul className="header_links">
      <li className="header_link">
        <a
          href="#home"
          onClick={(event) => handleScrollToSection("home", event)}
        >
          Accueil
        </a>
      </li>
      <li className="header_link">
        <a
          href="#about"
          onClick={(event) => handleScrollToSection("about", event)}
        >
          À propos
        </a>
      </li>
      <li className="header_link">
        <a
          href="#skills"
          onClick={(event) => handleScrollToSection("skills", event)}
        >
          Compétences
        </a>
      </li>
      <li className="header_link">
        <a
          href="#portfolio"
          onClick={(event) => handleScrollToSection("portfolio", event)}
        >
          Portfolio
        </a>
      </li>
      <li className="header_link">
        <a
          href="#contact"
          onClick={(event) => handleScrollToSection("contact", event)}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
