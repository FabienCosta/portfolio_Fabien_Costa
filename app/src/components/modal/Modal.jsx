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
        <div className="modal_title">
          <h2>{project.name}</h2>
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
            {project.websiteUrl && (
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
        <Carousel showArrows={true} showThumbs={false} className="carousel">
          {images.map((image, index) => (
            <div key={index} className="carousel_img">
              <img src={image} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <div className="modal_description">{renderDescription()}</div>
      </div>
    </div>
  );
};

export default Modal;
