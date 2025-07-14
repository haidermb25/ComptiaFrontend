"use client";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 sm:p-5 flex flex-col border shadow-sm">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-3 flex-shrink-0 overflow-hidden">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-black text-sm sm:text-base">{testimonial.name}</h4>
          <p className="text-xs sm:text-sm text-black">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-black leading-relaxed flex-1">{testimonial.quote}</p>
    </div>
  );
};

export default TestimonialCard;
