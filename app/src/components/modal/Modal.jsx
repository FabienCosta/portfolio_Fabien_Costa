import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./modal.scss";

const Modal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal_overlay")) {
      onClose();
    }
  };

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
          ×
        </button>
        <h2>{project.name}</h2>
        <img className="modal_img" src={project.image} alt={project.name} />
        <div className="modal_description">
          {renderDescription()}

          <div className="modal_icons">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
