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
import Filter from "../filter/Filter";

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
  const [filteredProjects, setFilteredProjects] = useState([]); // State pour les projets filtrés
  // State pour gérer le projet actuellement sélectionné pour affichage dans le modal
  const [selectedProject, setSelectedProject] = useState(null);
  // State pour gérer l'ouverture et la fermeture de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State pour gérer l'affichage de plus de projets (voir plus/voir moins)
  const [showMore, setShowMore] = useState(false);
  // State pour vérifier si on est en vue mobile (écran de largeur < 960px)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 960);
  // State pour la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState("Tous"); // État pour la catégorie sélectionnée

  // Utilisation du useEffect pour initialiser la liste des projets et écouter les changements de taille de la fenêtre
  useEffect(() => {
    setProjects(data); // Charge les projets depuis le fichier JSON
    setFilteredProjects(data); // Initialise les projets filtrés

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
    showMore || !isMobileView ? filteredProjects : filteredProjects.slice(0, 3); // Affiche tous les projets si "voir plus" ou non mobile, sinon affiche les 3 premiers

  // Fonction pour gérer le changement de filtre
  const handleFilterChange = (filter) => {
    setSelectedCategory(filter); // Met à jour la catégorie sélectionnée
    if (filter === "Tous") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category.includes(filter) // Utilise includes pour vérifier la présence du filtre dans le tableau de catégories
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <Filter
        onFilterChange={handleFilterChange}
        selectedCategory={selectedCategory}
      />{" "}
      {/* Passer la fonction de filtre au composant Filter */}
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
      {isMobileView && !showMore && filteredProjects.length > 3 && (
        <div className="portfolio_see-more">
          <button onClick={handleShowMore}>voir plus</button>
        </div>
      )}
      {isMobileView && showMore && (
        <div className="portfolio_show-less">
          <button onClick={handleShowLess}>voir moins</button>
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
