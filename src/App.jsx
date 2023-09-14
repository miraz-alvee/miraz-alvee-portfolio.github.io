import React, { useEffect, useState } from "react";
import "./App.css";
import bannerBg from "../public/bannerBg.gif";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Home from "./components/Header/Home";
import Navbar from "./components/Header/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { TbArrowMerge } from "react-icons/tb";
import LoadingScreen from "./components/LoadingScreen";
function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollButton(scrollTop > 100);
    };
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (isLoading) {
    return <LoadingScreen />;
  }
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
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
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
