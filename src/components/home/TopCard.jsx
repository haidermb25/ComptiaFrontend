"use client";
import React from "react";

const TopCard = ({ card }) => {
return (
    <div className="bg-white rounded-lg shadow-sm border h-auto sm:h-[400px]">
        <div className="p-4 sm:p-8 h-full flex flex-col sm:flex-row items-center">
            <div className="flex-1 sm:pr-6 order-2 sm:order-1">
                <h2 className={card.gradient
                    ? "text-2xl sm:text-4xl font-bold mb-0 bg-gradient-to-r from-[#cf4400] via-[#c8102e] via-[#a11661] via-[#7d1d7e] to-[#4e25a1] bg-clip-text text-transparent leading-tight"
                    : "text-xl sm:text-3xl font-bold mb-0 text-black leading-tight"}>
                    {card.title}
                </h2>
                <p className="text-black leading-relaxed mb-6 text-sm sm:text-base mt-3">{card.description}</p>
                {card.buttonText && (
                    <button className="px-4 sm:px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 text-sm sm:text-base">
                        {card.buttonText}
                    </button>
                )}
            </div>
            <div className="flex-shrink-0 mb-4 sm:mb-0 order-1 sm:order-2">
                <div className="w-full sm:w-[220px] h-[200px] sm:h-[260px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                    <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
);
};

export default TopCard;
