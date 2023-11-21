import React from "react";
import Lottie from "react-lottie";
import { Bounce } from "react-awesome-reveal";
import animationData from "../../../public/animation.json";
import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiExpress,
  SiVercel,
  SiRailway,
  SiAxios,
  SiFirebase,
  SiDaisyui,
  SiMysql,
  SiCplusplus,
  SiCoursera,
} from "react-icons/si";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { DiNodejs } from "react-icons/di";
import { BiLogoNetlify, BiLogoFigma } from "react-icons/bi";
import { FaBootstrap, FaReact, FaGithub, FaCcStripe } from "react-icons/fa";
const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="pb-28">
      <Bounce>
        <h2
          className="text-5xl text-[#04756F] text-center pb-4 font-bold uppercase tracking-wide relative group"
          style={{
            letterSpacing: "2px",
          }}
        >
          Skills
          <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-[#a3beef] transition-transform duration-300 group-hover:scale-x-150"></span>
        </h2>
      </Bounce>

      <div className="flex flex-col md:flex-row  gap-8 pt-8 ps-4 pe-4 justify-center items-center h-3/5">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-4/5 md:w-2/5"
        >
          <LottieAnimation />
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-11/12 p-8 md:w-2/5 text-lg text-[#a3beef] "
        >
          <p>
            <span className="text-[#2b9895] font-bold text-2xl">
              Languages:
            </span>{" "}
            C | C++ | Python | JavaScrip | TypeScript
          </p>
          <br />
          <p>
            <span className="text-[#2b9895] font-bold text-2xl">
              Front End:
            </span>{" "}
            React | HTML5 | CSS 3 | Tailwind CSS | Bootstrap 5
          </p>{" "}
          <br />
          <p>
            <span className="text-[#2b9895] font-bold text-2xl">Back End:</span>{" "}
            Node.js | Express.js
          </p>{" "}
          <br />
          <p>
            <span className="text-[#2b9895] font-bold text-2xl">Database:</span>{" "}
            MongoDB | MySQL
          </p>{" "}
          <br />
          <p>
            {" "}
            <span className="text-[#2b9895] font-bold text-2xl">
              Tools:
            </span>{" "}
            Git | Figma | Netlify | Vercel | Railway
          </p>{" "}
          <br />
        </div>
      </div>

      <div className="bg-slate-500 text-6xl w-full md:w-4/5 mx-auto rounded-2xl p-4">
        <Marquee className="p-4" speed={100} pauseOnHover>
          <TiHtml5 /> &nbsp;&nbsp;
          <TiCss3 />
          &nbsp;&nbsp;
          <FaBootstrap />
          &nbsp;&nbsp;
          <SiTailwindcss />
          &nbsp;
          <SiDaisyui />
          &nbsp;
          <IoLogoJavascript />
          &nbsp;
          <FaReact />
          &nbsp;
          <SiMongodb />
          &nbsp;
          <SiMysql />
          &nbsp;
          <DiNodejs />
          &nbsp;
          <SiExpress />
          &nbsp;
          <SiPython />
          &nbsp;
          <SiCplusplus />
          &nbsp;
          <SiCoursera />
          &nbsp;
          <SiFirebase />
          &nbsp;
          <FaCcStripe />
          &nbsp;
          <FaGithub />
          &nbsp;
          <BiLogoNetlify />
          &nbsp;
          <SiVercel />
          &nbsp;
          <SiRailway />
          &nbsp;
          <SiAxios />
          &nbsp;
          <BiLogoFigma />
          &nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
