import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about_title">A propos de moi...</h1>
      <h3>Présentation</h3>
      <p className="about_text">
        Bonjour, moi c'est Fabien Costa, j'ai 41 et je suis développeur web
        front-end specialisé en React.
      </p>
      <h3>Formations</h3>
      <p className="about_text">
        2022/2023 :{" "}
        <a
          href="https://oclock.io/formations/developpeur-web-web-mobile"
          target="_blank"
          rel="noreferrer"
        >
          O'clock
        </a>{" "}
        - Développeur Web et Web Mobile
      </p>
      <p className="about_text">
        2023/2024 :{" "}
        <a
          href="https://openclassrooms.com/fr/paths/900-integrateur-web"
          target="_blank"
          rel="noreferrer"
        >
          Openclassrooms
        </a>{" "}
        - Intégrateur Web
      </p>
    </div>
  );
};

export default About;
