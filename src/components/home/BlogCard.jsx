"use client";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="lg:flex-[1] h-auto flex flex-col justify-start items-start p-0">
      <h3 className="text-xs font-semibold mb-2 sm:mb-3 tracking-wide text-[rgb(183,15,42)]">{blog.heading}</h3>
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">{blog.title}</h2>
      <p className="text-black mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{blog.description}</p>
      <button className="px-4 sm:px-5 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 w-fit text-sm sm:text-base">
        {blog.buttonText}
      </button>
    </div>
  );
};

export default BlogCard;
