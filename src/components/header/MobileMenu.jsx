"use client";
import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = ({ menuItems, onClose, onLoginClick }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto safe-area-padding">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-red-600">CompTIA</h2>
          <button 
            onClick={onClose}
            className="text-gray-700 p-2"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              <button
                onClick={() => item.hasDropdown ? toggleItem(index) : onClose()}
                className={`flex justify-between items-center w-full py-3 px-2 text-left ${
                  expandedItems.includes(index) ? 'text-red-600 font-medium' : 'text-gray-700'
                }`}
              >
                <span>{item.title}</span>
                {item.hasDropdown && (
                  <span className="text-lg">
                    {expandedItems.includes(index) ? '−' : '+'}
                  </span>
                )}
              </button>
              
              {item.hasDropdown && expandedItems.includes(index) && (
                <div className="ml-4 mb-2 space-y-2">
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href="#"
                      className="block py-2 px-2 text-gray-600 hover:text-red-500 text-sm"
                      onClick={onClose}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <button
            onClick={() => {
              onLoginClick();
              onClose();
            }}
            className="w-full py-3 px-2 text-left font-medium text-gray-700 hover:text-red-600 border-b border-gray-100"
          >
            Login
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;