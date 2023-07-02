import React from "react";
import { Bounce } from "react-awesome-reveal";
import project1 from "../../../public/the-crazy-mexican.png";
import project2 from "../../../public/inner-light.png";
import project3 from "../../../public/speedy-nook.png";

const Projects = () => {
  return (
    <div className="pb-28">
      <Bounce>
        <h2
          className="text-5xl text-[#04756F] text-center pb-4 font-bold uppercase tracking-wide relative group"
          style={{
            letterSpacing: "2px",
          }}
        >
          Projects
          <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-[#a3beef] transition-transform duration-300 group-hover:scale-x-150"></span>
        </h2>
      </Bounce>

      {/* Projects Cards */}

      <div className="flex flex-col md:flex-row gap-14 md:gap-10 pt-12  justify-center items-center md:items-stretch">
        {/* Project 1 */}

        <div
          className="card  w-96 bg-base-100 shadow-xl"
          style={{ boxShadow: "8px 14px 14px -1px #2b9895" }}
        >
          <figure
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={project1} alt="the-crazy-mexican" />
          </figure>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="card-body bg-slate-900"
          >
            <h2 className="card-title text-[#2b9895]">
              The Crazy Mexican(Restaurant)
            </h2>
            <p className="text-[#a3beef]">
              The Crazy Mexican is a MERN single-page web application that shows
              the Mexican recipes of all available Mexican chefs.
            </p>
            <p className="text-[#a3beef]">
              <span className="text-[#2b9895] font-bold">
                Technologies used :{" "}
              </span>
              React.js, Tailwind CSS, daisyUI, Express.js, Firebase
              Authentication
            </p>
            <div className="card-actions justify-center pt-2">
              <a
                href="https://github.com/imtiaz-ahmmed/the-crazy-mexican-client"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Client
                </span>
              </a>
              <a
                href="https://github.com/imtiaz-ahmmed/the-crazy-mexican-server"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Server
                </span>
              </a>
              <a
                href="https://the-crazy-mexican.web.app/"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Live Site
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2  */}

        <div
          className="card w-96 bg-base-100 shadow-xl"
          style={{ boxShadow: "8px 14px 14px -1px #2b9895" }}
        >
          <figure
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={project3} alt="the-crazy-mexican" />
          </figure>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="card-body bg-slate-900"
          >
            <h2 className="card-title text-[#2b9895]">
              Speedy Nook (Toy Shop)
            </h2>
            <p className="text-[#a3beef]">
              Speedy Nook is a vibrant toy car shop with a wide collection of
              miniature cars.
            </p>
            <p className="text-[#a3beef]">
              <span className="text-[#2b9895] font-bold">
                Technologies used :{" "}
              </span>
              React.js, Tailwind CSS, daisyUI, Express.js, MongoDB, Firebase
              Authentication
            </p>
            <div className="card-actions justify-center pt-2">
              <a
                href="https://github.com/imtiaz-ahmmed/speedy-nook-client"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Client
                </span>
              </a>
              <a
                href="https://github.com/imtiaz-ahmmed/speedy-nook-server"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Server
                </span>
              </a>
              <a
                href="https://speedy-nook.web.app/"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Live Site
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 Start*/}

        <div
          className="card w-96 bg-base-100 shadow-xl"
          style={{ boxShadow: "8px 14px 14px -1px #2b9895" }}
        >
          <figure
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img src={project2} alt="the-crazy-mexican" />
          </figure>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="card-body bg-slate-900"
          >
            <h2 className="card-title text-[#2b9895]">
              Inner Light (Yoga School)
            </h2>
            <p className="text-[#a3beef]">
              Inner Light Yoga & Meditation School offers courses for students
              to connect mind, body, and soul. Learn ancient practices for
              strength, flexibility, and serenity.
            </p>
            <p className="text-[#a3beef]">
              <span className="text-[#2b9895] font-bold">
                Technologies used :{" "}
              </span>
              React.js, Tailwind CSS, daisyUI, Express.js, MongoDB, Firebase
              Authentication, Payment Gateway(Stripe)
            </p>
            <div className="card-actions justify-center pt-2">
              <a
                href="https://github.com/imtiaz-ahmmed/inner-light-client"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Client
                </span>
              </a>
              <a
                href="https://github.com/imtiaz-ahmmed/inner-light-server"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Server
                </span>
              </a>
              <a
                href="https://inner-light-13c1c.web.app/"
                target="_blank"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#2b9895] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#2b9895] rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#2b9895] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Live Site
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 End */}
      </div>
    </div>
  );
};

export default Projects;
