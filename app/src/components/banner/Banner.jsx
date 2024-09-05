import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./banner.scss";
import img from "../../assets/img/img.jpg";
import Fabien from "../../assets/img/Fabien.jpg";

const Banner = () => {
  return (
    <Parallax className="custom-class" y={[-20, 20]}>
      <div className="banner">
        <img src={img} alt="nature" className="banner_img" />
        <div className="banner_content">
          <img src={Fabien} alt="Fabien" className="banner_photo" />
          <h1 className="banner_title">Fabien Costa</h1>
          <p className="banner_subtitle">Front-end developer</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
