"use client";
import { useState, useEffect, useRef } from 'react';
import { menuItems } from '@/constant/menuItems';
import SubMenu from './SubMenu';
import LoginModal from './LoginModal';
import MobileMenu from './MobileMenu';

const MainHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (index) => {
    if (menuItems[index]?.hasDropdown) {
      setActiveDropdown(activeDropdown === index ? null : index);
    } else {
      setActiveDropdown(null);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">CompTIA</h1>
          </div>

          {/* Desktop Navigation - shown on lg screens and up */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleItemClick(index)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    activeDropdown === index ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <span className="ml-1">{activeDropdown === index ? '▲' : '▼'}</span>
                  )}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                    activeDropdown === index ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
                
                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute left-0 mt-0 z-10">
                    <SubMenu items={item.dropdownItems} />
                  </div>
                )}
              </div>
            ))}
            
            {/* Added Icons */}
            <button className="text-gray-700 hover:text-red-600 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button className="text-gray-700 hover:text-red-600 p-2 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">0</span>
            </button>
            
            <button
              onClick={() => {
                setShowLoginModal(true);
                setActiveDropdown(null);
              }}
              className="text-sm font-medium text-gray-700 hover:text-red-600 px-3 py-2"
            >
              Login
            </button>
          </nav>

          {/* Mobile menu button - shown on lg screens and down */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-700 hover:text-red-600 p-2"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu 
          menuItems={menuItems}
          onClose={() => setMobileMenuOpen(false)}
          onLoginClick={() => setShowLoginModal(true)}
        />
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </header>
  );
};

export default MainHeader;