import "./contact.scss";

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
          <a href="https://github.com/yourusername" class="social-icon">
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            class="social-icon"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
