"use client";
import React, { useState } from "react";
import TabBar from "@/components/shared/tabBar/TabBar";
import CareerCard from "@/components/exploreCareer/Card"; // Correct import name
import { allContentData } from "@/constant/menuItems";

export default function ExploreTechCareer() {
  const tabs = [
    "All technologies",
    "Cybersecurity",
    "Networking",
    "Cloud",
    "AI/Data",
  ];

  // Match the first tab name exactly to avoid hydration issues
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  // Ensure contentData is consistent with SSR
  const contentData = allContentData[selectedTab] || { jobs: [] };

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-1">
          Explore <span style={{ color: "#951A6B" }}>Tech Career</span>
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

      {/* Cards Grid Section */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Top Jobs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentData.jobs?.map((job, index) => (
            <CareerCard
              key={index}
              title={job.title}
              description={job.description}
              buttonText="Explore Job"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
