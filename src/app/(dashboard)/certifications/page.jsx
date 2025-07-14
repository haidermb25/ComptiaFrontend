"use client";
import TabBar from "@/components/shared/tabBar/TabBar";
import Card from "@/components/exploreCareer/Card";
import CertificationGrid from "@/components/certifications/CertificationsGrid";
import React, { useState } from "react";
export default function Certifications() {
  const tabs = [
    "All",
    "Digital Foundations",
    "AI",
    "Cloud",
    "Cyber",
    "Data",
    "Network",
    "Tech Support",
  ];

  // State for current tab
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-white py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-1">
          Explore <span style={{ color: "#951A6B" }}>Certifications</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Dive into different tech industry sectors to discover trends,
          opportunities, and how to align your skills with market needs.
        </p>
      </div>

      {/* Tab Bar Section */}
      <div className="px-4 md:px-8">
        <TabBar
          tabs={tabs}
          activeTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>
      {/* NEW SECTION - Certifications Grid */}
      <div className="py-16 bg-white">
        <CertificationGrid />
      </div>
    </div>
  );
}
