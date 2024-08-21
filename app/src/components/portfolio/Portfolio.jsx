import Card from "../card/Card";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <div className="portfolio_cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;
