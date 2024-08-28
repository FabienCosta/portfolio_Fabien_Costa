import React, { useState, useEffect } from "react";
import Card from "../card/Card";
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

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <div className="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <div className="portfolio_cards">
        {projects.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            description={project.description}
            name={project.name}
            icon={iconMap[project.icon]}
            icon2={iconMap[project.icon2]}
            icon3={iconMap[project.icon3]}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
