import React from "react";
import "./header.scss";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      {/* trouver un logo */}
      {/* <h1 className="header_title">Portfolio</h1> */}
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
  );
};

export default Header;
