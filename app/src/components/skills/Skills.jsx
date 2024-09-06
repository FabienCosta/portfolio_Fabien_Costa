import "./skills.scss";
import html5Logo from "../../assets/logos/html-5.svg";
import cssLogo from "../../assets/logos/css-3.svg";
import sassLogo from "../../assets/logos/sass.svg";
import jsLogo from "../../assets/logos/javascript.svg";
import reactLogo from "../../assets/logos/react.svg";
import reduxLogo from "../../assets/logos/redux.svg";
import gitHubLogo from "../../assets/logos/github.svg";
import gitLogo from "../../assets/logos/git.svg";
import npmLogo from "../../assets/logos/npm.svg";
import swaggerLogo from "../../assets/logos/swagger.svg";
import postmanLogo from "../../assets/logos/postman.svg";
import figmaLogo from "../../assets/logos/figma.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills_title">Compétences</h1>
      <div className="skills_talent">
        <div className="skills_logos">
          <img src={html5Logo} alt="html" className="skills_logo" />
          <img src={cssLogo} alt="css" className="skills_logo" />
          <img src={jsLogo} alt="javascript" className="skills_logo" />
          <img src={sassLogo} alt="sass" className="skills_logo" />
          <img src={reactLogo} alt="react" className="skills_logo" />
          <img src={reduxLogo} alt="redux" className="skills_logo" />
        </div>
        <div className="skills_logos">
          <img src={gitHubLogo} alt="github" className="skills_logo" />
          <img src={gitLogo} alt="git" className="skills_logo" />
          <img src={npmLogo} alt="npm" className="skills_logo" />
          <img src={swaggerLogo} alt="swagger" className="skills_logo" />
          <img src={postmanLogo} alt="postman" className="skills_logo" />
          <img src={figmaLogo} alt="figma" className="skills_logo" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
