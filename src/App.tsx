import React, { useEffect, useRef } from "react";
import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Education from "./components/Education";
import Footer from "./components/Footer";

const SECTIONS = ["home", "about", "portfolio", "experience", "education", "contact"];

const AppContent: React.FC = () => {// Main application content component that includes all sections and handles navigation based on scroll position
  const navigate = useNavigate();
  const location = useLocation();
  const current = useRef("");

  // On first load: if the URL is /about, /portfolio etc., scroll to that section
  useEffect(() => {
    const path = location.pathname.replace("/", "").replace(/\/$/, "");
    const section = SECTIONS.includes(path) ? path : "home";
    if (section !== "home") {
      // Small delay to let the page render before scrolling
      setTimeout(() => {
        scroller.scrollTo(section, { smooth: true, duration: 600 });
      }, 150);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount only

  // IntersectionObserver: update URL as user scrolls
  useEffect(() => {
    const observers: IntersectionObserver[] = [];// Array to hold IntersectionObserver instances

    SECTIONS.forEach((id) => {// Iterate through each section to set up IntersectionObserver
      const el = document.querySelector(`[name="${id}"]`);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && current.current !== id) {// Check if the section is intersecting and if it's different from the current section
            current.current = id;
            navigate(id === "home" ? "/" : `/${id}`, { replace: true });// Update the URL based on the current section
          }
        },
        { threshold: 0.4 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());// Clean up observers on component unmount
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
};

const App: React.FC = () => (// Main application component that wraps the content with BrowserRouter for routing
  <BrowserRouter basename="/My_Portfolio">
    <AppContent />
  </BrowserRouter>
);

export default App;
