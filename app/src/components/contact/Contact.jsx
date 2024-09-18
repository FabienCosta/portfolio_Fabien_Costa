import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Import d'EmailJS pour envoyer des emails via un formulaire
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Import des icônes de réseaux sociaux

// Composant Contact
const Contact = () => {
  // Utilisation de useRef pour créer une référence au formulaire
  const form = useRef();

  // Fonction pour gérer l'envoi du formulaire via EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Envoi de l'email via EmailJS en utilisant les informations du formulaire
    emailjs
      .sendForm(
        "service_kvj6qqi", // ID du service EmailJS
        "template_yxwmzuj", // ID du template EmailJS
        form.current, // Référence au formulaire
        "pTl61awX8vSEiuwuv" // Clé publique EmailJS
      )
      .then(
        (result) => {
          console.log(result.text); // Affiche le texte de confirmation dans la console
          alert("Message envoyé avec succès !"); // Message de confirmation d'envoi
        },
        (error) => {
          console.log(error.text); // Affiche le texte d'erreur dans la console
          alert("Erreur lors de l'envoi du message."); // Message d'erreur en cas d'échec
        }
      );
  };

  return (
    <div className="contact">
      <h1 className="contact_title">Contact</h1>
      <div className="contact_link">
        {/* Formulaire de contact */}
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            required
            className="contact_form_field"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="contact_form_field"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="contact_form_field"
          ></textarea>
          <button type="submit" className="contact_form_button">
            Envoyer
          </button>
        </form>

        {/* Section des réseaux sociaux */}
        <div className="contact_link_socialNetwork">
          <h2 className="contact_link_socialNetwork_title">
            Mes réseaux sociaux
          </h2>
          <div className="contact_link_socialNetwork_icons">
            {/* Lien vers le profil GitHub */}
            <a
              href="https://github.com/FabienCosta"
              className="contact_link_socialNetwork_icon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Fabien Costa"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="sr-only">GitHub de Fabien Costa</span>{" "}
              {/* Texte caché pour l'accessibilité */}
            </a>

            {/* Lien vers le profil LinkedIn */}
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

            {/* Lien vers le profil X (anciennement Twitter) */}
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
