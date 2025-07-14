"use client";
import React from "react";

const StatCard = ({ stat }) => {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="text-4xl sm:text-7xl font-bold text-red-600 mb-3">{stat.value}</div>
      <p className="text-black text-sm sm:text-base leading-relaxed">{stat.description}</p>
    </div>
  );
};

export default StatCard;
