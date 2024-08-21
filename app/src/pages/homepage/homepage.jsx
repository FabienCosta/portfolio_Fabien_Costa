import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HomePage;
