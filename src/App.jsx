import "./App.css";
import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import About from "../src/components/about/About";
import Journey from "../src/components/journey/Journey";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Journey />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
