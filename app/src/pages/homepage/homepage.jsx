import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import "./homepage.scss";

const HomePage = () => {
  return (
    <ParallaxProvider>
      <div className="homepage">
        <Parallax speed={-20}>
          <Banner />
        </Parallax>

        <Parallax speed={10}>
          <About />
        </Parallax>

        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </ParallaxProvider>
  );
};

export default HomePage;
