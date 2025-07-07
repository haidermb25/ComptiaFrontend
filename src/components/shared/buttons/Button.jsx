"use client"
import React from "react";

const Button = ({ value }) => {
  return (
    <button className="px-6 py-3 bg-[#C8272E] text-white font-medium rounded-full border-2 border-transparent hover:bg-white hover:text-[#C8272E] hover:border-[#C8272E] shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] focus:ring-opacity-50">
      {value}
    </button>
  );
}

export default Button;