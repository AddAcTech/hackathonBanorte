import React from "react";
import loadingGif from "../assets/loader.gif";

function Loading() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex justify-center items-center">
      <img src={loadingGif} alt="Loading..." className="w-30 h-30" />
    </div>
  );
}

export default Loading;