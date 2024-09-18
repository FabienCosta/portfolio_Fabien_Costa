import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Icône de GitHub
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Icône pour le lien vers le site web
import { Carousel } from "react-responsive-carousel"; // Import du composant Carousel pour afficher un carrousel d'images
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./modal.scss";

// Composant Modal qui reçoit un projet, une fonction onClose pour fermer le modal, et une liste d'images
const Modal = ({ project, onClose, images }) => {
  // Fonction pour détecter si l'utilisateur a cliqué en dehors de la modal (sur l'overlay)
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal_overlay")) {
      onClose(); // Si on clique en dehors de la modal, on la ferme
    }
  };

  // Fonction pour afficher la description du projet. Si la description est un tableau, on affiche une liste à puces.
  const renderDescription = () => {
    if (Array.isArray(project.description)) {
      return (
        <ul>
          {project.description.map((item, index) => (
            <li key={index}>{item}</li> // Chaque élément de la description est affiché dans une liste
          ))}
        </ul>
      );
    }
    return <p>{project.description}</p>; // Si la description n'est pas un tableau, on affiche un paragraphe
  };

  return (
    <div className="modal_overlay" onClick={handleOverlayClick}>
      {/* Conteneur principal du modal */}
      <div className="modal">
        {/* Bouton pour fermer la modal */}
        <button className="modal_close" onClick={onClose}>
          × {/* Icône de fermeture */}
        </button>

        {/* Titre du projet et icônes pour les liens GitHub et site web */}
        <div className="modal_title">
          <h2>{project.name}</h2>
          <div className="modal_icons">
            {/* Lien vers GitHub si disponible */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> {/* Icône GitHub */}
              </a>
            )}
            {/* Lien vers le site web si disponible */}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} /> {/* Icône Globe */}
              </a>
            )}
          </div>
        </div>

        {/* Carrousel pour afficher les images du projet */}
        <Carousel showArrows={true} showThumbs={false} className="carousel">
          {images.map((image, index) => (
            <div key={index} className="carousel_img">
              <img src={image} alt={`Project ${index + 1}`} />{" "}
              {/* Affichage de chaque image */}
            </div>
          ))}
        </Carousel>

        {/* Affichage de la description du projet */}
        <div className="modal_description">{renderDescription()}</div>
      </div>
    </div>
  );
};

export default Modal;
