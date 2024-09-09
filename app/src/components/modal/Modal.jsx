import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Importer l'icône du globe
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./modal.scss";

const Modal = ({ project, onClose, images }) => {
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
        <Carousel showArrows={true} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </Carousel>
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
            {project.websiteUrl && ( // Ajouter le lien vers le site en ligne
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
