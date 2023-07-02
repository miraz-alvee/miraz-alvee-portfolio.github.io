import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import { Slant as Hamburger } from "hamburger-react";
import * as Scroll from "react-scroll";
let Link = Scroll.Link;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar ps-10 pe-10 bg-black z-10 fixed  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn  btn-circle btn-accent lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <Hamburger direction="right" />
            ) : (
              <Hamburger direction="right" />
            )}
          </label>
          {isOpen && (
            <ul className="cursor-pointer dropdown-content mt-3 z-[1] p-2 text-[#04756F] shadow bg-gray-800 rounded-box font-bold w-52 ">
              <li>
                <Link
                  activeClass="active"
                  to="banner"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  hashSpy={true}
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  hashSpy={true}
                  to="skills"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="projects"
                  smooth={true}
                  spy={true}
                  hashSpy={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  duration={500}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          )}
        </div>
        <img className="w-48 h-28 rounded-full pl-4" src={logo} alt="" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="cursor-pointer flex gap-10 font-bold text-2xl  px-1 text-[#04756F]">
          <li>
            <Link
              activeClass="active"
              spy={true}
              to="banner"
              smooth={true}
              hashSpy={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              to="about"
              smooth={true}
              hashSpy={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              hashSpy={true}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              hashSpy={true}
              to="contacts"
              smooth={true}
              duration={500}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
