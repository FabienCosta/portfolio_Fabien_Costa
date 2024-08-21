import "./card.scss";
import Fabien from "../../assets/img/Fabien.jpg";

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <img src={Fabien} alt="img" className="card_img" />
      <h3 className="card_title">card</h3>
      <p className="card_text">description</p>
    </div>
  );
};

export default Card;
