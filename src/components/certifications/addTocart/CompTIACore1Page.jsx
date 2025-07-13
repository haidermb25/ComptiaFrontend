"use client";
import React from 'react';
import CareerCard from '../../shared/eachTypeCards/careerCards';
import Button from '../../shared/buttons/Button';
import TabBar from '../../shared/tabBar/TabBar';
import CertificationCard from '../../shared/eachTypeCards/CertificationCard';

const CompTIACore1Page = () => {
  const tabs = ['Overview', 'Buy Now', 'Career Path', 'Resources'];

  // Exam products data
  const examProducts = [
    {
      title: 'A+ Voucher',
      price: '$265',
      details: 'See additional details'
    },
    {
      title: 'A+ Voucher Plus Retake Assurance',
      price: '$314',
      details: 'See additional details'
    }
  ];

  // Learning products data
  const learningProducts = [
    {
      title: 'A+ Core 1 CertMaster Learn',
      price: '$369',
      details: 'See additional details'
    },
    {
      title: 'A+ Core 1 CertMaster Practice',
      price: '$149',
      details: 'See additional details'
    },
    {
      title: 'A+ Core 1 eBook',
      price: '$95',
      details: 'See additional details'
    },
    {
      title: 'A+ Core 1 Instructor eBook',
      price: '$95',
      details: 'See additional details'
    }
  ];

  // Continuing education data
  const continuingEducation = [
    {
      title: 'A+ CertMaster CE',
      price: '$139',
      details: 'See additional details'
    },
    {
      title: 'Continuing Education Token',
      price: '$25',
      details: 'See additional details'
    }
  ];

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: 'url(https://images.cmp.optimizely.com/d7bc3c949d3e11efacace2115a019d6d)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Grey overlay for better card visibility */}
      <div className="absolute inset-0 bg-gray-200 bg-opacity-50"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(170deg, #cf4400, #c8102e 21%, #a11661 45%, #7d1d7e 67%, #4e25a1 93%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              A+ Core 1 V15 (New Version)
            </h1>
            <div className="flex-shrink-0 relative" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-4 border-red-600 flex flex-col items-center justify-center bg-white">
                <div className="text-xs font-bold text-red-600 mb-1">CompTIA</div>
                <div className="text-lg font-bold text-red-600 text-center leading-tight">A+</div>
                <div className="text-xs text-red-600 mt-1">CERTIFICATION</div>
                <div className="text-xs text-red-600 absolute -bottom-3 bg-white px-2 rounded">Plus Series</div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-4xl mb-8">
            CompTIA A+ Core 1 is the first of two exams required to earn the industry-standard A+ 
            certification, designed to launch your tech career. This exam focuses on foundational skills in 
            hardware, networking, mobile devices, and troubleshooting. Passing Core 1 and Core 2 
            prepares you for roles like IT support specialist and help desk technician while building the 
            knowledge needed to pursue advanced certifications like Network+ and Security+.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="mb-8">
          <TabBar tabs={tabs} />
        </div>

        {/* Cards Container */}
        <div className="px-4 sm:px-6 lg:px-8 space-y-12">
          {/* First Card - Exam Products */}
          <div 
            className="w-full bg-white rounded-lg shadow-lg"
            style={{ height: '70vh' }}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Exam products</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6 flex-1">
                {examProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                      <button className="text-gray-600 text-base hover:text-gray-800 flex items-center">
                        {product.details}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-base text-gray-500 mb-1">My Price</div>
                        <div className="text-xl font-bold text-gray-900">{product.price}</div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Card - Learning Products */}
          <div 
            className="w-full bg-white rounded-lg shadow-lg"
            style={{ height: '110vh' }}
          >
            <div className="p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning products</h2>
              
              <div className="grid grid-cols-1 gap-6 flex-1">
                {learningProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                      <button className="text-gray-600 text-base hover:text-gray-800 flex items-center">
                        {product.details}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-base text-gray-500 mb-1">My Price</div>
                        <div className="text-xl font-bold text-gray-900">{product.price}</div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Third Card - Continuing Education */}
          <div 
            className="w-full bg-white rounded-lg shadow-lg"
            style={{ height: '70vh' }}
          >
            <div className="p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Continuing education</h2>
              
              <div className="grid grid-cols-1 gap-6 flex-1">
                {continuingEducation.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                      <button className="text-gray-600 text-base hover:text-gray-800 flex items-center">
                        {product.details}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-base text-gray-500 mb-1">My Price</div>
                        <div className="text-xl font-bold text-gray-900">{product.price}</div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompTIACore1Page;