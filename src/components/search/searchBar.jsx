// components/search/searchBar.jsx
"use client";

import { useState, useRef, useEffect } from 'react';

export default function SearchBar({ onNavItemClick, isIconOnly = false }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && 
          searchRef.current && !searchRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavItemClick = () => {
    setIsPopupOpen(false);
    if (onNavItemClick) {
      onNavItemClick();
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search submitted:', searchValue);
  };

  return (
    <>
      {/* Search Input - Icon only or Full input */}
      {isIconOnly ? (
        <button 
          ref={searchRef}
          onClick={() => setIsPopupOpen(true)}
          className="text-gray-700 hover:text-red-600 p-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      ) : (
        <div className="relative">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            onClick={() => setIsPopupOpen(true)}
          />
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setIsPopupOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Popup Overlay - Responsive */}
      {isPopupOpen && (
        <div 
          className="fixed left-0 right-0 bg-white z-50 md:h-[68vh]" 
          style={{ 
            top: '64px', 
            height: 'calc(100vh - 64px)' // Full height on mobile
          }}
        >
          <div 
            ref={popupRef}
            className="bg-white w-full h-full overflow-y-auto"
          >
            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* Search Bar Section - Mobile */}
              <div className="bg-gray-50 px-4 py-6">
                <form onSubmit={handleSearchSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="w-full py-3 px-4 pr-12 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-base"
                      autoFocus
                    />
                    <button 
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-md font-medium text-white transition-colors duration-200"
                    style={{ 
                      backgroundColor: '#c22222',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#a11d1d'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#c22222'}
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* Quick Links Section - Mobile */}
              <div className="bg-white px-4 py-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Quick links</h3>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <ul className="space-y-4 text-base">
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block font-medium"
                      >
                        A+
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block"
                      >
                        Certification
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block"
                      >
                        Resources
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block"
                      >
                        Blogs
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block"
                      >
                        Careers
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex h-full">
              {/* Left Side - Search Bar */}
              <div className="w-3/5 bg-gray-50 px-8 py-12">
                <div className="w-full" style={{ marginLeft: '5%' }}>
                  <form onSubmit={handleSearchSubmit} className="flex items-center gap-4">
                    <div className="relative" style={{ width: '60%' }}>
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-full py-3 px-4 pr-12 border-2 rounded-md focus:outline-none focus:ring-2 text-base border-black"
                        style={{ 
                          '--tw-ring-color': '#000000'
                        }}
                        autoFocus
                      />
                      <button 
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-md font-medium text-white transition-colors duration-200"
                      style={{ 
                        backgroundColor: '#c22222',
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#a11d1d'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#c22222'}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Side - Quick Links */}
              <div className="w-2/5 bg-white px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Quick links</h3>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <ul className="space-y-3 text-sm">
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block"
                      >
                        A+
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block ml-4"
                      >
                        Certification
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block ml-4"
                      >
                        Resources
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block ml-4"
                      >
                        Blogs
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={handleNavItemClick}
                        className="text-gray-700 hover:text-red-600 transition-colors block ml-4"
                      >
                        Careers
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}