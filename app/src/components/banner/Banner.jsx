import "./banner.scss";
import img from "../../assets/img/img.jpg";
import Fabien from "../../assets/img/Fabien.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={img} alt="nature" className="banner_img" />
      <div className="banner_content">
        <img src={Fabien} alt="Fabien" className="banner_photo" />
        <h1 className="banner_title">Fabien Costa</h1>
        <p className="banner_subtitle">Front-end developer</p>
      </div>
    </div>
  );
};

export default Banner;
