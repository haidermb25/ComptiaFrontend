"use client";
import React from "react";

// Importing all components
import TopCard from "./TopCard";
import StatCard from "./StatCard";
import TestimonialCard from "./TestimonialCard";
import BlogCard from "./BlogCard";
import CollegeHighlightCard from "./CollegeHighlightCard";
import ConnectCard from "./ConnectCard";

const Homepage = ({ contentData }) => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">

        {/* Section 1: Top Cards + Stats */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6">
          <div className="lg:flex-[2] flex flex-col gap-4 sm:gap-6">
            {contentData.topCards.map((card, index) => (
              <TopCard key={index} card={card} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="lg:flex-[1] bg-white rounded-lg shadow-sm border mt-4 lg:mt-0 p-4 sm:p-8">
            <h3 className="text-sm sm:text-base font-semibold mb-4 sm:mb-6 tracking-wide bg-gradient-to-r from-[#cf4400] via-[#c8102e] via-[#a11661] via-[#7d1d7e] to-[#4e25a1] bg-clip-text text-transparent">
              {contentData.stats.heading}
            </h3>
            <div className="flex flex-col gap-6">
              {contentData.stats.items.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Success Stories + Blog */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="lg:flex-[2] bg-gray-100 rounded-lg shadow-sm border p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-black">{contentData.success.title}</h2>
            <p className="text-black mb-4 sm:mb-5 text-sm sm:text-base">{contentData.success.description}</p>
            <button className="px-4 sm:px-5 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 mb-4 sm:mb-5 w-fit text-sm sm:text-base">
              {contentData.success.buttonText}
            </button>
            <div className="flex flex-col sm:flex-row gap-4">
              {contentData.success.testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Blog Card */}
          <BlogCard blog={contentData.blog} />
        </div>

        {/* Section 3: College Highlight + Connect */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-10 sm:mb-16">
          <CollegeHighlightCard college={contentData.college} />
          <ConnectCard connect={contentData.connect} />
        </div>

      </div>
    </div>
  );
};

export default Homepage;
