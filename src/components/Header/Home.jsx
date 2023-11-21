import React, { useRef, useEffect } from "react";
import profile from "../../../public/my-picture2.png";
import bannerBg from "../../../public/bannerBg.gif";
import resume from "../../../public/Resume-of-Imtiaz-Ahmmed.pdf";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { Rotate } from "react-awesome-reveal";
import { MdOutlineSimCardDownload } from "react-icons/md";
AOS.init();

const Home = () => {
  const el = useRef(null);
  let typed = useRef(null);

  const startTyping = () => {
    typed.current = new Typed(el.current, {
      strings: [
        "MERN Stack Developer.",
        "Full Stack Developer.",
        "Web Developer.",
        "Software Engineer.",
      ],
      typeSpeed: 100,
      onComplete: () => {
        setTimeout(() => {
          typed.current.reset();
        }, 3000); // Delay in milliseconds before resetting (2 seconds in this example)
      },
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume-of-Imtiaz-Ahmmed.pdf";
    link.click();
  };

  useEffect(() => {
    startTyping();

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row  gap-8 pt-48 ps-4 pe-4 justify-center items-center h-3/5">
      <div className="w-full md:w-2/5 text-center">
        <h4 className="text-white text-4xl pb-8">Hello, I'm</h4>

        <Rotate>
          <h1 className="text-6xl text-[#a3beef] pb-8 ">Imtiaz Ahmmed</h1>
        </Rotate>

        <p className="text-[#04756F] font-bold text-2xl pb-8">
          I'm a <span ref={el} />
        </p>
        <button
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          onClick={handleDownloadResume}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#04756F] rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative flex items-center gap-2 ">
            Download Resume
            <span className="text-2xl">
              <MdOutlineSimCardDownload />
            </span>
          </span>
        </button>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="w-4/5 md:w-2/5"
      >
        <img className="w-full rounded-full" src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
