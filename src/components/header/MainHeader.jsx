"use client";
import { useState, useEffect, useRef } from 'react';
import { menuItems } from '@/constant/menuItems';
import SubMenu from './SubMenu';
import LoginModal from './LoginModal';
import MobileMenu from './MobileMenu';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/search/searchBar';

const MainHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const router = useRouter();

  const routingArray = [
    { title: "Explore Careers", path: "/exploreCareer" },
    { title: "Certifications", path: "/certifications" },
    { title: "Enterprise", path: "/enterprise" },
    { title: "Government", path: "/government" },    
    { title: "Partner", path: "/partner" },
    { title: "Academic", path: "/academic" },
    { title: "Explore Industries →", path: "/exploreCareer/exploreIndustries" },
    { title: "Explore Tech Careers →", path: "/exploreCareer/exploreTechCareers" },
    { title: "Careers+ →", path: "/exploreCareer/careersPlus" },
    { title: "State & Local →", path: "/government/state" },
    { title: "Federal →", path: "/government/federal" },
    { title: "Higher Education →", path: "/academic/higherEducation" },
    { title: "Secondary Education →", path: "/academic/secondaryEducation" },
    { title: "Instructors →", path: "/academic/instructor" },
    { title: "Students →", path: "/academic/student" },
  ];

  const handleRouting = (item) => {
    setActiveDropdown(null);

    const title = typeof item === 'string' ? item : item?.title;

    if (!title) return;

    const route = routingArray.find(r => r.title === title);
    if (route?.path) {
      router.replace(route.path); // faster navigation
    } else {
      console.warn("No route found for:", title);
    }
  };

  const handleNavItemClick = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    routingArray.forEach(r => {
      if (r.path) router.prefetch(r.path);
    });
  }, []);

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

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">CompTIA</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onClick={() => handleRouting(item)}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <button
                  className={`relative px-3 py-2 text-sm font-medium transition-transform duration-300 transform hover:scale-105 cursor-pointer active:scale-95 ${
                    activeDropdown === index ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <span className="ml-1">{activeDropdown === index ? '▲' : '▼'}</span>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      activeDropdown === index ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>

                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute left-0 mt-0 z-10">
                    <SubMenu
                      items={item.dropdownItems}
                      onItemClick={(dropdownItem) => handleRouting(dropdownItem)}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Search Icon */}
            <SearchBar onNavItemClick={handleNavItemClick} isIconOnly={true} />

            <button className="text-gray-700 hover:text-red-600 p-2 relative transition-transform duration-300 transform hover:scale-110 active:scale-95">
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
              className="text-sm font-medium text-gray-700 hover:text-red-600 px-3 py-2 transition-transform duration-300 transform hover:scale-105 active:scale-95"
            >
              Login
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <SearchBar onNavItemClick={handleNavItemClick} isIconOnly={true} />
            
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