import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
