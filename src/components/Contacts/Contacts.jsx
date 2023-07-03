import React, { useRef } from "react";
import { Bounce } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import animationData from "../../../public/mail.json";
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneOutboundFill, BsSkype } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

import Lottie from "react-lottie";
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
const Contacts = () => {
  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Your message has been successfully sent!",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Message Failed",
      text: "Oops! Something went wrong. Please try again.",
    });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zhs8w4h",
        "template_fqpa3v6",
        form.current,
        "HV8XpCCW0Azbm9Hi7"
      )
      .then(
        (result) => {
          console.log(result.text);
          successAlert();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          errorAlert();
        }
      );
  };

  return (
    <div className="pb-28">
      <Bounce>
        <h2
          className="text-5xl text-[#04756F] text-center pb-4 font-bold uppercase tracking-wide relative group"
          style={{
            letterSpacing: "2px",
          }}
        >
          Contacts
          <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-[#a3beef] transition-transform duration-300 group-hover:scale-x-150"></span>
        </h2>
      </Bounce>

      <div className="flex flex-col md:flex-row  gap-16 md:gap-8 pt-8 ps-4 pe-4 justify-center items-center h-3/5">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-4/5 md:w-2/5"
        >
          <div className="w-1/2 h-1/2">
            <LottieAnimation />
          </div>

          <div className="w-1/2 h-1/2">
            <div className="text-[#a3beef] text-2xl flex gap-8 items-center">
              <p
                className="text-[#2b9895] hover:text-[#a3beef] bg-slate-900 rounded-full p-2    text-2xl "
                style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
              >
                <AiTwotoneMail />
              </p>{" "}
              <p>imtiazahmmed00@gmail.com</p>
            </div>
            <br />
            <div className="text-[#a3beef] text-2xl flex gap-8 items-center">
              <p
                className="text-[#2b9895] hover:text-[#a3beef] bg-slate-900 rounded-full p-2    text-2xl "
                style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
              >
                <BsFillTelephoneOutboundFill />
              </p>
              <p>+880&nbsp;1784305274</p>
            </div>
            <br />
            <div className="text-[#a3beef] text-2xl flex gap-8 items-center">
              <p
                className="text-[#2b9895] hover:text-[#a3beef] bg-slate-900 rounded-full p-2    text-2xl "
                style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
              >
                <ImLocation />
              </p>
              <p>Dhaka,&nbsp;Bangladesh</p>
            </div>

            <Bounce>
              <h2
                className="text-2xl md:text-3xl text-[#04756F] text-center pb-4 md:pt-20 pt-12 font-bold uppercase tracking-wide relative group"
                style={{
                  letterSpacing: "2px",
                }}
              >
                Get in Touch
                <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-[#a3beef] transition-transform duration-300 group-hover:scale-x-150"></span>
              </h2>
            </Bounce>
            <div className="flex gap-12 justify-center items-center pt-8">
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
          </div>
        </div>
        <div
          className="w-11/12 p-12 md:mt-56 md:w-2/5 text-lg text-black  "
          style={{ boxShadow: "0 0 80px  -1px #2b9895" }}
        >
          <h2 className="text-[#a3beef] font-bold pb-8 text-center text-3xl">
            Write Me A Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
            <label className="text-[#2b9895] font-bold text-lg">Name</label>
            <input
              className="bg-gray-400 mt-2 p-2 rounded-lg w-full  focus:outline-none focus:ring-2 focus:ring-[#2b9895]"
              type="text"
              name="from_name"
              required
              placeholder="Enter your name"
            />
            <br /> <br />
            <label className="text-[#2b9895] font-bold text-lg mt-4">
              Email
            </label>
            <input
              className="bg-gray-400 mt-2 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#2b9895]"
              type="email"
              name="from_email"
              required
              placeholder="Enter your email"
            />
            <br /> <br />
            <label className="text-[#2b9895] font-bold text-lg mt-4">
              Message
            </label>
            <textarea
              className="bg-gray-400 mt-2 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#2b9895]"
              name="message"
              placeholder="Enter your message"
            />
            <input
              type="submit"
              required
              value="Send"
              className="text-[#2b9895] bg-black font-bold mt-4 py-2 px-4 rounded-lg cursor-pointer hover:text-[#a3beef] focus:outline-none focus:ring-2 focus:ring-[#2b9895]"
              style={{ boxShadow: "-1px 10px 14px  -1px #2b9895" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
