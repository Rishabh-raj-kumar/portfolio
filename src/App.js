import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero_section";
import Gallery from "./components/gallery";
import Timeline from "./components/timeline";
import Testonomial from "./components/testionomials";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero /> 
        <Gallery />
        <Timeline />
        <Testonomial />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
