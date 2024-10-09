import React from "react";
import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import "./homepage.scss";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const HomePage = () => {
  return (
    <ParallaxProvider>
      <div className="homepage">
        {/* Section Banner avec position fixe */}
        <section id="home" className="banner-section">
          <Banner />
        </section>

        {/* Les autres sections défilent par-dessus la bannière */}
        <div className="content">
          <Parallax speed={0}>
            <section id="about">
              <About />
            </section>
          </Parallax>

          <Parallax speed={0}>
            <section id="skills">
              <Skills />
            </section>
          </Parallax>

          <Parallax speed={0}>
            <section id="portfolio">
              <Portfolio />
            </section>
          </Parallax>

          <Parallax speed={0}>
            <section id="contact">
              <Contact />
            </section>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default HomePage;
