import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact_title">Contact</h1>
      <div>
        <form className="contact_form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
