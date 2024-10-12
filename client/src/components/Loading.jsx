import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border-8 border-gray-200 border-t-8 border-t-red-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
}

export default Loading;
