import React from "react";
import "./modal.scss";

const Modal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Vérifiez si la description est un tableau
  const renderDescription = () => {
    if (Array.isArray(project.description)) {
      return (
        <ul>
          {project.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{project.description}</p>;
  };

  return (
    <div className="modal_overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal_close" onClick={onClose}>
          X
        </button>
        <h1>{project.name}</h1>
        <img src={project.image} alt="img" className="modal_img" />
        {renderDescription()}
      </div>
    </div>
  );
};

export default Modal;
