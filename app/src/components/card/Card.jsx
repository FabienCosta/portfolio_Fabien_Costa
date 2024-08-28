import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";

const Card = ({ name, image, description, icon, icon2, icon3 }) => {
  return (
    <div className="card">
      <img src={image} alt="img" className="card_img" />
      <div className="card_content">
        <h3 className="card_title">{name}</h3>
        <div className="card_icons">
          {icon && <FontAwesomeIcon icon={icon} className="card_icon" />}{" "}
          {icon && <FontAwesomeIcon icon={icon2} className="card_icon" />}{" "}
          {icon && <FontAwesomeIcon icon={icon3} className="card_icon" />}{" "}
          {/* Affiche l'icône si elle est fournie */}
        </div>
      </div>
      <p className="card_text">{description}</p>
    </div>
  );
};

export default Card;
