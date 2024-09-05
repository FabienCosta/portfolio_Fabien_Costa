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

const iconMap = {
  faHtml5: faHtml5,
  faCss3Alt: faCss3Alt,
  faSass: faSass,
  faJs: faJs,
  faReact: faReact,
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setProjects(data);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <div className="portfolio_cards">
        {projects.map((project) => (
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
