import React from "react";
import profile2 from "../../../public/my-picture1.png";
import { Bounce } from "react-awesome-reveal";
const About = () => {
  const getGreeting = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      return "Good morning!";
    } else if (hours >= 12 && hours < 17) {
      return "Good afternoon!";
    } else if (hours >= 17 && hours < 21) {
      return "Good evening!";
    } else {
      return "Good night!";
    }
  };
  return (
    <div className="pt-28 pb-28">
      <Bounce>
        <h2
          className="text-5xl text-[#04756F] text-center pb-4 font-bold uppercase tracking-wide relative group"
          style={{
            letterSpacing: "2px",
          }}
        >
          About
          <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-[#a3beef] transition-transform duration-300 group-hover:scale-x-150"></span>
        </h2>
      </Bounce>

      <div className="flex flex-col md:flex-row  gap-12 pt-8 ps-4 pe-4 justify-center items-center h-3/5">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-4/5 md:w-2/5"
        >
          <img
            className="w-full rounded-full"
            style={{
              borderRadius: "32% 68% 75% 25% / 84% 24% 76% 16%  ",
            }}
            src={profile2}
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full md:w-2/5 text-center bg-gray-950 rounded-3xl "
        >
          <h4 className="text-[#2b9895] text-3xl font-bold">
            Hi, {getGreeting()}
          </h4>
          <h4 className="text-[#a3beef] text-lg text-justify p-4">
            I am a Junior Software Developer at
            <a
              href="https://www.zednzedit.com/"
              target="_blank"
              className="text-[#2b9895] font-bold"
            >
              {" "}
              ZedandZed IT Services Ltd,
            </a>{" "}
            having graduated with a degree in Computer Science & Engineering
            from{" "}
            <a
              href="http://iub.ac.bd"
              target="_blank"
              className="text-[#2b9895] font-bold"
            >
              {" "}
              Independent University Bangladesh (IUB).
            </a>{" "}
            With a strong passion for web development, I specialize in{" "}
            <span className="text-[#2b9895] font-bold">MERN</span> stack
            development. I have experience in designing and developing websites
            and applications using the MERN stack. I am driven by a strong
            ability to work{" "}
            <span className="text-[#2b9895] font-bold">independently</span> and
            collaborate effectively within cross-functional teams. I believe in
            the power of{" "}
            <span className="text-[#2b9895] font-bold">hard work </span>
            and determination as the keys to success, and I bring these
            qualities to every project I undertake. I am always eager to
            <span className="text-[#2b9895] font-bold"> learn </span>
            and explore new technologies and trends in the field of web
            development. With my knowledge and skills in the MERN stack, I am
            confident in my ability to create{" "}
            <span className="text-[#2b9895] font-bold">innovative </span> and
            <span className="text-[#2b9895] font-bold">
              <span className="text-[#2b9895] font-bold">
                {" "}
                efficient solutions {""}
              </span>
            </span>
            for various web development projects.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
