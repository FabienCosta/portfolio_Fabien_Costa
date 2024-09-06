import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";

const Card = ({ name, image, description, icon, icon2, icon3, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt="img" className="card_img" />
      <div className="card_content">
        <h3 className="card_title">{name}</h3>
        <div className="card_icons">
          {icon && <FontAwesomeIcon icon={icon} className="card_icon" />}
          {icon2 && <FontAwesomeIcon icon={icon2} className="card_icon" />}
          {icon3 && <FontAwesomeIcon icon={icon3} className="card_icon" />}
        </div>
      </div>
      <p className="card_text">{description}</p>
      <div className="card_overlay">
        <p className="overlay_message">Cliquez pour en savoir plus</p>
      </div>
    </div>
  );
};

export default Card;
