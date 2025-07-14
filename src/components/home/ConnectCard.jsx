"use client";
import React from "react";

const ConnectCard = ({ connect }) => {
  return (
    <div className="lg:flex-[1] h-auto flex flex-col items-start p-0">
      <h3 className="text-xs font-semibold mb-1 sm:mb-2 tracking-wide text-[rgb(183,15,42)]">{connect.heading}</h3>
      <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-black">{connect.title}</h2>
      <p className="text-black mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{connect.description}</p>
      <button className="px-4 sm:px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 text-sm sm:text-base">
        {connect.buttonText}
      </button>
    </div>
  );
};

export default ConnectCard;
