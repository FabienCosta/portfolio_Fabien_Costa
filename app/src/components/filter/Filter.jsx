import "./filter.scss";
import React from "react";

const Filter = ({ onFilterChange, selectedCategory }) => {
  // Recevoir la fonction de filtre en tant que prop
  const categories = ["Tous", "HTML", "CSS", "SASS", "JAVASCRIPT", "REACT"]; // Liste des catégories

  return (
    <div className="filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter_button ${
            selectedCategory === category ? "active" : ""
          }`} // Ajouter la classe active si la catégorie est sélectionnée
          onClick={() => onFilterChange(category)} // Appeler la fonction de filtre avec la catégorie correspondante
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
