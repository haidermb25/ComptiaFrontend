"use client";
import React from "react";

const CollegeHighlightCard = ({ college }) => {
  return (
    <div className="lg:flex-[2] bg-white rounded-lg shadow-sm border h-auto sm:h-[520px] pb-6 sm:pb-10">
      <div className="p-4 sm:p-10 h-full flex flex-col">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-5 text-black">{college.title}</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start flex-1">
          <div className="flex-1">
            <p className="text-black leading-relaxed mb-4 text-sm sm:text-base">{college.description}</p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div className="w-full sm:w-[260px] h-[200px] sm:h-[220px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <img src={college.image} alt="College" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 text-sm sm:text-base w-fit">
          {college.buttonText}
        </button>
      </div>
    </div>
  );
};

export default CollegeHighlightCard;
