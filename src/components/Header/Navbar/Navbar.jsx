import React, { useState, useEffect } from "react";
import logo from "../../../../public/logo.png";
import { Slant as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactsSection = document.getElementById("contacts");

      const sections = [
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "projects", name: "Projects" },
        { id: "contacts", name: "Contacts" },
      ];

      let currentSection = "home";

      if (
        contactsSection.getBoundingClientRect().top <=
        window.innerHeight / 2
      ) {
        currentSection = "contacts";
      } else if (
        projectsSection.getBoundingClientRect().top <=
        window.innerHeight / 2
      ) {
        currentSection = "projects";
      } else if (
        skillsSection.getBoundingClientRect().top <=
        window.innerHeight / 2
      ) {
        currentSection = "skills";
      } else if (
        aboutSection.getBoundingClientRect().top <=
        window.innerHeight / 2
      ) {
        currentSection = "about";
      }

      setActiveSection(currentSection);

      sections.forEach((section) => {
        const link = document.querySelector(`.navbar a[href="#${section.id}"]`);
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.navbar a[href="#${currentSection}"]`
      );
      activeLink.classList.add("active");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar ps-10 pe-10 bg-black z-10 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn  btn-circle btn-accent lg:hidden"
            onClick={toggleMenu}
          >
            <Hamburger direction="right" />
          </label>
          {isOpen && (
            <ul className="cursor-pointer dropdown-content mt-3 z-[1] p-2 text-[#04756F] shadow bg-gray-800 rounded-box font-bold w-52">
              <li>
                <a
                  href="#home"
                  className={activeSection === "home" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeSection === "skills" ? "active" : ""}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === "projects" ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className={activeSection === "contacts" ? "active" : ""}
                >
                  Contacts
                </a>
              </li>
            </ul>
          )}
        </div>
        <img className="w-48 h-28 rounded-full pl-4" src={logo} alt="" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="cursor-pointer flex gap-10 font-bold text-2xl px-1 text-[#04756F]">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className={activeSection === "contacts" ? "active" : ""}
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
