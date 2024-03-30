import "./App.css";
import HomeMain from "./components/sections/Hero/HomeMain";
import Team from "./components/sections/Team/Team";
import About from "./components/sections/About/About";
import Navigation from "./components/layout/Navigation";
import Portfolio from "./components/sections/Portfolio/Portfolio";
import Footer from "./components/layout/Footer";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <HomeMain id="home" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Team />
      <Footer id="contact" />
    </div>
  );
};

export default App;
