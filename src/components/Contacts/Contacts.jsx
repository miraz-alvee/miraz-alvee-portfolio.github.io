import React from "react";
import { Bounce } from "react-awesome-reveal";
import animationData from "../../../public/mail.json";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
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

      <div className="flex flex-col md:flex-row  gap-8 pt-8 ps-4 pe-4 justify-center items-center h-3/5">
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
            <div className="text-[#a3beef] text-3xl flex gap-8 items-center">
              <p
                className="text-[#2b9895] bg-slate-900 rounded-full p-4    text-3xl "
                style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
              >
                <AiTwotoneMail />
              </p>{" "}
              <p>imtiazahmmed00@gmail.com</p>
            </div>
            <br />
            <div className="text-[#a3beef] text-3xl flex gap-8 items-center">
              <p
                className="text-[#2b9895] bg-slate-900 rounded-full p-4    text-3xl "
                style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
              >
                <BsFillTelephoneOutboundFill />
              </p>
              <p>+880&nbsp;1784305274</p>
            </div>
            <br />
            <div className="text-[#a3beef] text-3xl flex gap-8 items-center">
              <p
                className="text-[#2b9895] bg-slate-900 rounded-full p-4    text-3xl "
                style={{ boxShadow: "0 14px 14px -1px #2b9895" }}
              >
                <ImLocation />
              </p>
              <p>Dhaka,&nbsp;Bangladesh</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-11/12 p-8 md:w-2/5 text-lg text-[#a3beef] "
        ></div>
      </div>
    </div>
  );
};

export default Contacts;
