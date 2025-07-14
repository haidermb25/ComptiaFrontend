"use client";
import React from "react";

const TabBar = ({ tabs = [], activeTab, onTabChange }) => {
  return (
    <div className="w-[90%] h-[100px] bg-black mx-auto flex items-center justify-around rounded-xl shadow-lg flex-wrap gap-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(tab)}
          className={`text-white text-base sm:text-lg md:text-xl font-semibold px-4 sm:px-6 py-2 sm:py-3 relative transition-all duration-300 cursor-pointer`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded-t" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
