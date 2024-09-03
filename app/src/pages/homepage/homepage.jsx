import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
