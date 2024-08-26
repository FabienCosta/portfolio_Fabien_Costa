import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      {/* trouver un logo */}
      {/* <h1 className="header_title">Portfolio</h1> */}
      <nav>
        <ul className="header_links">
          <li className="header_link">
            <a href="/">Home</a>
          </li>
          <li className="header_link">
            <a href="/about">About</a>
          </li>
          <li className="header_link">
            <a href="/services">Skills</a>
          </li>
          <li className="header_link">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="header_link">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
