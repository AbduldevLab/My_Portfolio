import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Education from "./components/Education";
import Footer from "./components/Footer"

const App:React.FC = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Education/>
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
