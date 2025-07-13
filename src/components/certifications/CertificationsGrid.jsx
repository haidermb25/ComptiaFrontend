"use client";
import React from 'react';
import CertificationCard from '@/components/shared/eachTypeCards/CertificationCard';

const certifications = [
  { id: 1, name: "A+", role: "Help Desk Support Specialist", badgeColor: "border-red-500", textColor: "text-red-500", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 2, name: "a+ Network", role: "Network Administrator", badgeColor: "border-orange-500", textColor: "text-orange-500", series: "a+ Series", certification: "COMPICERT" },
  { id: 3, name: "a+ Cyber", role: "Security Analyst", badgeColor: "border-orange-600", textColor: "text-orange-600", series: "a+ Series", certification: "COMPICERT" },
  { id: 4, name: "AI Essentials", role: "Career Builder", badgeColor: "border-green-600", textColor: "text-green-600", series: "Essentials Series", certification: "COMPICERT" },
  { id: 5, name: "Business Essentials", role: "Career Builder", badgeColor: "border-green-700", textColor: "text-green-700", series: "Essentials Series", certification: "COMPICERT" },
  { id: 6, name: "CASP+", role: "Security Architect", badgeColor: "border-gray-700", textColor: "text-gray-700", series: "Xpert Series", certification: "CERTIFICATION" },
  { id: 7, name: "Cisco Networking", role: "Network Engineer", badgeColor: "border-blue-600", textColor: "text-blue-600", series: "Pro Series", certification: "COMPICERT" },
  { id: 8, name: "Windows Client Pro", role: "System Administrator", badgeColor: "border-blue-700", textColor: "text-blue-700", series: "Pro Series", certification: "COMPICERT" },
  { id: 9, name: "Cloud Essentials+", role: "Career Builder", badgeColor: "border-red-500", textColor: "text-red-500", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 10, name: "Cloud Essentials", role: "Career Builder", badgeColor: "border-green-600", textColor: "text-green-600", series: "Essentials Series", certification: "COMPICERT" },
  { id: 11, name: "Cloud+", role: "Cloud Architect", badgeColor: "border-red-500", textColor: "text-red-500", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 12, name: "CloudNetX", role: "Network Architect", badgeColor: "border-gray-700", textColor: "text-gray-700", series: "Xpert Series", certification: "CERTIFICATION" },
  { id: 13, name: "CyberDefense Pro", role: "Security Engineer", badgeColor: "border-blue-600", textColor: "text-blue-600", series: "Pro Series", certification: "COMPICERT" },
  { id: 14, name: "CySA+", role: "Security Analyst", badgeColor: "border-red-500", textColor: "text-red-500", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 15, name: "Data+", role: "Data Analyst", badgeColor: "border-red-500", textColor: "text-red-500", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 16, name: "DataSys+", role: "Database Administrator", badgeColor: "border-red-500", textColor: "text-red-500", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 17, name: "DataX", role: "Data Scientist", badgeColor: "border-gray-800", textColor: "text-gray-800", series: "Xpert Series", certification: "CERTIFICATION" },
  { id: 18, name: "Digital Literacy Pro", role: "Career Builder", badgeColor: "border-blue-600", textColor: "text-blue-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 19, name: "Ethical Hacker Pro", role: "Cybersecurity Manager", badgeColor: "border-teal-700", textColor: "text-teal-700", series: "Pro Series", certification: "COMPCERT" },
  { id: 20, name: "Hybrid Server Pro I: Core", role: "Network Engineer", badgeColor: "border-indigo-600", textColor: "text-indigo-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 21, name: "Hybrid Server Pro II: Advanced", role: "Network Engineer", badgeColor: "border-cyan-600", textColor: "text-cyan-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 22, name: "ITF+", role: "Career Builder", badgeColor: "border-red-600", textColor: "text-red-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 23, name: "IT Fundamentals Pro", role: "Career Builder", badgeColor: "border-blue-700", textColor: "text-blue-700", series: "Pro Series", certification: "COMPCERT" },
  { id: 24, name: "Library Suite", role: "Network Engineer", badgeColor: "border-yellow-600", textColor: "text-yellow-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 25, name: "Linux+", role: "Linux Administrator", badgeColor: "border-red-500", textColor: "text-red-500", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 26, name: "CompTIA Linux Pro", role: "Linux Administrator", badgeColor: "border-blue-800", textColor: "text-blue-800", series: "Pro Series", certification: "COMPCERT" },
  { id: 27, name: "Microsoft Excel Pro", role: "Career Builder", badgeColor: "border-green-600", textColor: "text-green-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 28, name: "Microsoft Word Pro", role: "Career Builder", badgeColor: "border-purple-600", textColor: "text-purple-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 29, name: "Network+", role: "Network Administrator", badgeColor: "border-pink-600", textColor: "text-pink-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 30, name: "Microsoft Office Pro", role: "Career Builder", badgeColor: "border-sky-600", textColor: "text-sky-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 31, name: "PC Pro", role: "IT Support Specialist", badgeColor: "border-emerald-600", textColor: "text-emerald-600", series: "Pro Series", certification: "COMPCERT" },
  { id: 32, name: "PenTest+", role: "Penetration & Vulnerability Testers & Analyst", badgeColor: "border-rose-600", textColor: "text-rose-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 33, name: "Project+", role: "IT Project Manager", badgeColor: "border-red-700", textColor: "text-red-700", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 34, name: "Security+", role: "Security Analyst", badgeColor: "border-crimson-600", textColor: "text-crimson-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 35, name: "Security Pro", role: "Security Analyst", badgeColor: "border-slate-700", textColor: "text-slate-700", series: "Pro Series", certification: "COMPCERT" },
  { id: 36, name: "SecurityX", role: "Security Architect", badgeColor: "border-zinc-700", textColor: "text-zinc-700", series: "Xpert Series", certification: "CERTIFICATION" },
  { id: 37, name: "Server+", role: "Network Administrator", badgeColor: "border-amber-600", textColor: "text-amber-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 38, name: "Soft Skills Essentials", role: "Career Builder", badgeColor: "border-lime-600", textColor: "text-lime-600", series: "Essentials Series", certification: "COMPCERT" },
  { id: 39, name: "Tech+", role: "Career Builder", badgeColor: "border-orange-600", textColor: "text-orange-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 40, name: "A+", role: "IT Support Specialist", badgeColor: "border-violet-600", textColor: "text-violet-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 41, name: "Cloud+", role: "Cloud Engineer", badgeColor: "border-fuchsia-600", textColor: "text-fuchsia-600", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 42, name: "Data+", role: "Data Analyst", badgeColor: "border-emerald-700", textColor: "text-emerald-700", series: "Plus Series", certification: "CERTIFICATION" },
  { id: 43, name: "CySA+", role: "Cybersecurity Analyst", badgeColor: "border-teal-800", textColor: "text-teal-800", series: "Plus Series", certification: "CERTIFICATION" }
];

const CertificationGrid = () => (
  <div className="w-full bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  </div>
);

export default CertificationGrid;