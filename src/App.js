import "./App.css";
import About from "./components/layout/About/About";
import Article from "./components/layout/Article/Article";
import Certs from "./components/layout/Certs/Certs";
import Contact from "./components/layout/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Hero/Hero";
import Service from "./components/layout/Service/Service";
import Skill from "./components/layout/Skill/Skill";
import Work from "./components/layout/Work/Work";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Certs />
      <Work />
      <Article />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
