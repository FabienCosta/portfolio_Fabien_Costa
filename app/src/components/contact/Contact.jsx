import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact_title">Contact</h1>
      <div className="contact_link">
        <form className="contact_form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact_link_socialNetwork">
          <h2 className="contact_link_socialNetwork_title">
            Mes réseaux sociaux
          </h2>
          <div className="contact_link_socialNetwork_icons">
            <a
              href="https://github.com/FabienCosta"
              className="contact_link_socialNetwork_icon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Fabien Costa"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="sr-only">GitHub de Fabien Costa</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fabien-costa-/"
              className="contact_link_socialNetwork_icon"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn de Fabien Costa"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="sr-only">Profil LinkedIn de Fabien Costa</span>
            </a>
            <a
              href="https://x.com/home?lang=fr"
              className="contact_link_socialNetwork_icon"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil X (Twitter) de Fabien Costa"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
              <span className="sr-only">
                Profil X (Twitter) de Fabien Costa
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
