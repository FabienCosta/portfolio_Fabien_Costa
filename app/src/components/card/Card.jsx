import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";

// Composant Card
const Card = ({ name, image, description, icon, icon2, icon3, onClick }) => {
  // État pour gérer l'activation/désactivation de l'effet hover de la carte
  const [isActive, setIsActive] = useState(true);

  // Fonction de gestion du clic sur la carte
  const handleClick = () => {
    setIsActive(!isActive); // Inverse l'état pour activer/désactiver l'effet de hover
    if (onClick) {
      onClick(); // Si une fonction onClick est passée en prop, elle est exécutée
    }
  };

  return (
    // Classe CSS dynamique en fonction de l'état isActive
    <div
      className={`card ${!isActive ? "card_no_hover" : ""}`} // Ajoute la classe card_no_hover si la carte est inactive
      onClick={handleClick} // Ajoute un événement de clic sur la carte
    >
      <img src={image} alt="img" className="card_img" />

      <div className="card_content">
        <h3 className="card_title">{name}</h3>

        {/* Affichage des icônes si elles sont fournies */}
        <div className="card_icons">
          {icon && <FontAwesomeIcon icon={icon} className="card_icon" />}
          {icon2 && <FontAwesomeIcon icon={icon2} className="card_icon" />}
          {icon3 && <FontAwesomeIcon icon={icon3} className="card_icon" />}
        </div>
      </div>

      <p className="card_text">{description}</p>

      {/* Overlay pour indiquer l'interaction */}
      <div className="card_overlay">
        <p className="overlay_message">Cliquez pour en savoir plus</p>
      </div>
    </div>
  );
};

export default Card;
