import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HomePage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
