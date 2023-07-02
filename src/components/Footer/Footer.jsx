import React from "react";

const Footer = () => {
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
    <div className="h-96 bg-blue-800">
      <h2>Footer</h2>
      <h4>{getGreeting()}</h4>
    </div>
  );
};

export default Footer;
