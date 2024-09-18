import React from "react";
import "./banner.scss";
import img from "../../assets/img/homepage.webp";
import Fabien from "../../assets/img/Fabien.webp";

// Composant Banner
const Banner = () => {
  return (
    <div className="banner">
      <img src={img} alt="nature" className="banner_img" />

      <div className="banner_content">
        <img src={Fabien} alt="Fabien" className="banner_photo" />

        <h1 className="banner_title">Fabien Costa</h1>

        <p className="banner_subtitle">Développeur Front-end</p>
      </div>
    </div>
  );
};

export default Banner;
