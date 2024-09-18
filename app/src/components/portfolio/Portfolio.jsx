import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./portfolio.scss";
import data from "../../data/projects.json";

// Mapping des icônes pour faciliter leur utilisation plus tard dans le code
const iconMap = {
  faHtml5: faHtml5,
  faCss3Alt: faCss3Alt,
  faSass: faSass,
  faJs: faJs,
  faReact: faReact,
};

const Portfolio = () => {
  // State pour stocker la liste des projets
  const [projects, setProjects] = useState([]);
  // State pour gérer le projet actuellement sélectionné pour affichage dans le modal
  const [selectedProject, setSelectedProject] = useState(null);
  // State pour gérer l'ouverture et la fermeture de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State pour gérer l'affichage de plus de projets (voir plus/voir moins)
  const [showMore, setShowMore] = useState(false);
  // State pour vérifier si on est en vue mobile (écran de largeur < 960px)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 960);

  // Utilisation du useEffect pour initialiser la liste des projets et écouter les changements de taille de la fenêtre
  useEffect(() => {
    setProjects(data); // Charge les projets depuis le fichier JSON

    // Fonction de rappel pour mettre à jour la vue mobile en fonction de la taille de la fenêtre
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 960);
    };

    // Ajoute un écouteur d'événements pour suivre les changements de taille de fenêtre
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Nettoyage lors du démontage du composant
  }, []);

  // Fonction pour gérer le clic sur une carte de projet
  const handleCardClick = (project) => {
    setSelectedProject(project); // Met à jour le projet sélectionné
    setIsModalOpen(true); // Ouvre la modal
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // Réinitialise le projet sélectionné à null
  };

  // Fonction pour afficher plus de projets
  const handleShowMore = () => {
    setShowMore(true);
  };

  // Fonction pour afficher moins de projets
  const handleShowLess = () => {
    setShowMore(false);
  };

  // Détermine quels projets sont affichés en fonction de l'état "voir plus" et de la vue mobile
  const displayedProjects =
    showMore || !isMobileView ? projects : projects.slice(0, 3); // Affiche tous les projets si "voir plus" ou non mobile, sinon affiche les 3 premiers

  return (
    <div className="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <div className="portfolio_cards">
        {displayedProjects.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            name={project.name}
            icon={iconMap[project.icon]}
            icon2={iconMap[project.icon2]}
            icon3={iconMap[project.icon3]}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      {isMobileView && !showMore && projects.length > 3 && (
        <div className="portfolio_see-more">
          <button onClick={handleShowMore}>voir plus</button>{" "}
          {/* Bouton "voir plus" uniquement si plus de 3 projets */}
        </div>
      )}
      {isMobileView && showMore && (
        <div className="portfolio_show-less">
          <button onClick={handleShowLess}>voir moins</button>{" "}
          {/* Bouton "voir moins" si l'utilisateur a cliqué sur "voir plus" */}
        </div>
      )}
      {isModalOpen && (
        <Modal
          project={selectedProject}
          images={selectedProject.images}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Portfolio;
