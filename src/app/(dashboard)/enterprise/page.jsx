"use client";
import React, { useState } from "react";
import TabBar from "@/components/shared/tabBar/TabBar";
import TopCard from "@/components/home/TopCard";
import CareerCard from "@/components/exploreCareer/Card";
import { enterprisecontentData } from "@/constant/menuItems";

export default function Enterprise() {
  const tabs = ["Overview", "Solutions", "EmployeeCareerPathways", "CaseStudy"];

  const [selectedTab, setSelectedTab] = useState("Overview");
  const contentData = enterprisecontentData[selectedTab];

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-white py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-1">
          <span style={{ color: "#951A6B" }}>Enterprise</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Dive into different tech industry sectors to discover trends,
          opportunities, and how to align your skills with market needs.
        </p>
      </div>

      {/* Tabs */}
      <div className="px-4 md:px-8 mb-8">
        <TabBar
          tabs={tabs}
          activeTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>

      {/* Dynamic Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        {selectedTab === "Overview" && (
          <>
            {/* Top Section: Left + Right Card */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="lg:flex-[2]">
                <TopCard card={contentData.leftCard} />
              </div>
              <div className="lg:flex-[1] bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {contentData.rightCard.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {contentData.rightCard.description}
                </p>
              </div>
            </div>

            {/* Bottom Card */}
            <TopCard card={contentData.bottomCard} />
          </>
        )}

        {selectedTab === "Solutions" && (
          <>
            {/* Top Section: Left + Right Card */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="lg:flex-[2]">
                <TopCard card={contentData.leftCard} />
              </div>
              <div className="lg:flex-[1] bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {contentData.rightCard.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {contentData.rightCard.description}
                </p>
              </div>
            </div>

            {/* Bottom Card */}
            <TopCard card={contentData.bottomCard} />
            <TopCard card={contentData.moreBottomCard} />
          </>
        )}

        {selectedTab === "EmployeeCareerPathways" && (
          <div className=" py-4 px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">
              Explore <span>jobs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              Dive into different tech industry sectors to discover trends,
              opportunities, and how to align your skills with market needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData.map((job, index) => (
                <CareerCard
                  key={index}
                  title={job.title}
                  description={job.description}
                  buttonText="Explore Job"
                />
              ))}
            </div>
          </div>
        )}

        {selectedTab === "CaseStudy" && (
          <>
            {/* Bottom Card */}
            <TopCard card={contentData.topCard} className="mb-4" />
            {/* Top Section: Left + Right Card */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="lg:flex-[2]">
                <TopCard card={contentData.bottomLeftCard} />
              </div>
              <div className="lg:flex-[1] bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {contentData.bottomRightCard.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {contentData.bottomRightCard.description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Above Footer Section */}
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
