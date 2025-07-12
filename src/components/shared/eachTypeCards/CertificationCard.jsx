"use client";
import React from 'react';
import Link from 'next/link';

const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-6">
        <div className={`w-36 h-36 rounded-full border-4 ${cert.badgeColor} flex flex-col items-center justify-center bg-white relative`}>
          <div className={`text-xs font-bold ${cert.textColor} mb-1`}>CompTIA</div>
          <div className={`text-xl font-bold ${cert.textColor} text-center leading-tight px-2`}>
            {cert.name.includes('a+') ? cert.name.split(' ')[1] || cert.name : cert.name}
          </div>
          <div className={`text-xs ${cert.textColor} mt-1`}>{cert.certification}</div>
          <div className={`text-xs ${cert.textColor} absolute -bottom-5 bg-white px-2 rounded`}>{cert.series}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 text-center mb-2 mt-6">{cert.name}</h3>

      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{cert.role}</span>
      </div>

      <div className="flex justify-center">
        <Link 
          href={`/dashboard/certifications/${cert.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`}
          className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200"
        >
          Learn More
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CertificationCard;