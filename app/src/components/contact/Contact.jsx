import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvj6qqi", // Remplacez par votre SERVICE_ID
        "template_yxwmzuj", // Remplacez par votre TEMPLATE_ID
        form.current,
        "pTl61awX8vSEiuwuv" // Remplacez par votre USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <div className="contact">
      <h1 className="contact_title">Contact</h1>
      <div className="contact_link">
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input type="text" name="user_name" placeholder="Nom" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Envoyer</button>
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
