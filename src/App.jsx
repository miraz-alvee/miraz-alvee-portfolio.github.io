import React, { useEffect, useState } from "react";
import "./App.css";
import bannerBg from "../public/bannerBg.gif";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Element, animateScroll as scroll } from "react-scroll";

import { TbArrowMerge } from "react-icons/tb";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className="overflow-hidden"
      style={{
        background: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Element name="banner">
        <Banner />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contacts">
        <Contacts />
      </Element>
      {showScrollButton && (
        <div className="scroll-button" onClick={scrollToTop}>
          <TbArrowMerge />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
