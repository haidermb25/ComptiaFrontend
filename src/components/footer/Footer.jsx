"use client";
import React from 'react';
const Footer = () => {
  const socialMedia = [
    { name: 'Facebook', url: 'https://www.facebook.com/CompTIA/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', url: 'https://www.instagram.com/comptiaofficial/?hl=en', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'YouTube', url: 'https://www.youtube.com/comptia', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/comptia/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Twitter', url: 'https://twitter.com/comptia', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' }
  ];
  return (
    <footer className="bg-white py-8 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Logo and Social Media */}
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-red-600">CompTIA</h2>
            </div>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d={social.icon} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {/* Middle Section - Links */}
          <div className="w-full md:w-2/4 grid grid-cols-2 gap-8">
            {/* Shop Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shop</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers at CompTIA', 'Newsroom', 'Share your Expertise'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-red-600 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Help</h3>
              <ul className="space-y-2">
                {['Contact Us', 'Return Policy', 'Legal and Privacy', 'Share Website Feedback'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-red-600 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Section - Region Selector */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Region</h3>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 mb-4">
              <option>Global Market</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
            </select>
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
              Get Latest Updates
            </button>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} CompTIA, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;