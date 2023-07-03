import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import logo from "../../../public/logo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 text-center">
      <img src={logo} alt="Website Logo" className="mt-5 mx-auto w-24 h-16" />
      <div className="flex gap-12 justify-center items-center pt-4 pb-4">
        <a
          href="https://github.com/imtiaz-ahmmed"
          target="_blank"
          className="text-[#2b9895] bg-slate-900 rounded-full p-2 text-2xl hover:text-[#a3beef] "
          style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/imtiaz-ahmmed/"
          target="_blank"
          className="text-[#2b9895] bg-slate-900 rounded-full p-2  flex gap-8  text-2xl hover:text-[#a3beef] "
          style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://join.skype.com/invite/wXDqA9AGkafU"
          target="_blank"
          className="text-[#2b9895] bg-slate-900 rounded-full p-2  flex gap-8  text-2xl hover:text-[#a3beef] "
          style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
        >
          <BsSkype />
        </a>
      </div>

      <p className="mt-3 text-sm">
        Copyright &copy; {new Date().getFullYear()} || Imtiaz Ahmmed || All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
