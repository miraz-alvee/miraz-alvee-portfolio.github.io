import React from "react";
import loadingGif from "../../public/loading.gif";

const LoadingScreen = () => {
  return (
    <div className="loading-screen flex items-center justify-center bg-black w-full h-screen ">
      <img className="w-96 h-96" src={loadingGif} alt="Loading" />
    </div>
  );
};

export default LoadingScreen;
