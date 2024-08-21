import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills_title">Compétences</h1>
      <div className="skills_talent">
        <div>
          <h3>Front-end</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue</li>
          </ul>
        </div>
        <div>
          <h3>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
