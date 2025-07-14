"use client";
import React, { useState } from "react";
import TabBar from "@/components/shared/tabBar/TabBar";
import TopCard from "@/components/home/TopCard";
import StatCard from "@/components/home/StatCard";
import CareerCard from "@/components/exploreCareer/Card"; // Assuming CareerCard is the component to display career cards
import { allContentData } from "@/constant/menuItems"; // allContentData must be exported from here

export default function ExploreInduxtries() {
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

  // Get contentData based on selected tab
  const contentData = allContentData[selectedTab];

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-white py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-1">
          Explore <span style={{ color: "#951A6B" }}>Industries</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Dive into different tech industry sectors to discover trends,
          opportunities, and how to align your skills with market needs.
        </p>
      </div>

      {/* Tab Bar Section */}
      <div className="px-4 md:px-8 mb-4">
        <TabBar
          tabs={tabs}
          activeTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>

      {/* Cards Grid Section */}
      <div className="min-h-screen  p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Section 1: Top Cards + Stats */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6">
            {/* Top Cards */}
            <div className="lg:flex-[2] flex flex-col gap-4 sm:gap-6">
              {contentData.topCards.map((card, index) => (
                <TopCard key={index} card={card} />
              ))}
            </div>

            {/* Stats Section */}
            <div className="lg:flex-[1] bg-white rounded-lg shadow-sm border mt-4 lg:mt-0 p-4 sm:p-8">
              <h3 className="text-sm sm:text-base font-semibold mb-4 sm:mb-6 tracking-wide bg-gradient-to-r from-[#cf4400] via-[#c8102e] via-[#a11661] via-[#7d1d7e] to-[#4e25a1] bg-clip-text text-transparent">
                {contentData.stats.heading}
              </h3>
              <div className="flex flex-col gap-6">
                {contentData.stats.items.map((stat, index) => (
                  <StatCard key={index} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Top jobs section*/}
      {/* Top Jobs Section */}
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
              height="150px"
              buttonText="Explore Job"
            />
          ))}
        </div>
      </div>

      {/*End Card*/}
      {/* Future of Tech Section */}
      <div className="mt-16 w-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Explore the Future of Tech with CompTIA
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Dive deeper into the most dynamic tech industry sectors—AI, Cloud,
            Networking, Cybersecurity, and beyond. Stay informed, gain insights,
            and lead the way in shaping tomorrow’s technology landscape.
          </p>
          <button className="px-6 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-200">
            Discover more insights
          </button>
        </div>
      </div>
    </div>
  );
}
