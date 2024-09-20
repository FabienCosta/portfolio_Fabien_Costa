import React, { useState } from "react";
import "./about.scss";

// Composant About
const About = () => {
  // État pour gérer l'affichage du texte supplémentaire (développement/réduction)
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour basculer l'état d'affichage du texte
  const handleExpand = () => {
    setIsExpanded(!isExpanded); // Inverse l'état pour montrer ou cacher les détails
  };

  return (
    <div className="about">
      <h1 className="about_title">A propos de moi...</h1>
      <div className="about_main">
        <div className="about_main_description">
          {/* Section de présentation personnelle */}
          <h2 className="about_main_title">Présentation</h2>
          <p className="about_main_text">
            Bonjour, je m'appelle Fabien Costa, développeur front-end spécialisé
            en JavaScript et React. J'ai suivi deux formations intensives, l'une
            pour acquérir des bases solides en JavaScript et l'autre pour
            approfondir mes compétences en React.
          </p>

          {/* Affiche le contenu additionnel si isExpanded est true */}
          {isExpanded && (
            <>
              <p className="about_main_text">
                Bien que je me concentre sur le front-end, j'ai aussi des bases
                en Node.js, ce qui me donne une vision globale du développement
                web. En plus de mes compétences techniques, je suis autonome,
                ouvert d'esprit avec une bonne capacité à résoudre des
                problèmes.
              </p>
              <p className="about_main_text">
                Je suis adaptable, ce qui me permet de m'ajuster rapidement aux
                nouvelles technologies et environnements de travail. J'apprécie
                aussi le travail en équipe pour atteindre des objectifs communs.
              </p>
              <p className="about_main_text">
                L'objectif de cette présentation est de montrer que, malgré mon
                statut de jeune développeur, je suis déjà autonome pour occuper
                un poste de front-end. Je recherche mon premier emploi, mais je
                suis aussi ouvert à un stage pour prouver que je peux être un
                atout pour votre équipe.
              </p>
            </>
          )}

          {/* Bouton pour afficher ou réduire le contenu additionnel */}
          <button className="about_main_button" onClick={handleExpand}>
            {isExpanded ? "Réduire" : "En savoir plus"}
          </button>
        </div>

        {/* Section des formations */}
        <div className="about_main_description">
          <h3 className="about_main_title">Formations</h3>
          <p className="about_main_text">
            2023/2024 :{" "}
            <a
              href="https://openclassrooms.com/fr/paths/900-integrateur-web"
              target="_blank"
              rel="noreferrer"
              className="about_main_text_link"
            >
              Openclassrooms
            </a>{" "}
            - Intégrateur Web
          </p>
          <p className="about_main_text">
            2022/2023 :{" "}
            <a
              href="https://oclock.io/formations/developpeur-web-web-mobile"
              target="_blank"
              rel="noreferrer"
              className="about_main_text_link"
            >
              O'clock
            </a>{" "}
            - Développeur Web et Web Mobile
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
