"use client";
import React, { useState } from "react";
import TabBar from "@/components/shared/tabBar/TabBar";
import TopCard from "@/components/home/TopCard";
import StatCard from "@/components/home/StatCard";
import Card from "@/components/exploreCareer/Card";

export default function HigherEducation() {
  const tabs = ["Overview", "Programs", "Resources", "Success Stories"];

  const [selectedTab, setSelectedTab] = useState("Overview");

  const contentData = {
    Overview: {
      topCards: [
        {
          title: "Empowering Higher Education with Industry-Ready Skills",
          description: "CompTIA partners with universities and colleges to bridge the gap between academic learning and industry demands. Our certifications provide students with practical, job-ready skills that employers value.",
          buttonText: "Explore Programs",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
          gradient: true,
        },
        {
          title: "Industry-Aligned Curriculum Integration",
          description: "Integrate CompTIA certifications into your existing curriculum to enhance student outcomes and increase employability. Our programs align with current industry standards and emerging technologies.",
          buttonText: "Learn More",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
          gradient: false,
        },
      ],
      stats: {
        heading: "Higher Education Impact",
        items: [
          {
            value: "95%",
            description: "Of students with CompTIA certifications report increased job opportunities.",
          },
          {
            value: "2,500+",
            description: "Higher education institutions partner with CompTIA globally.",
          },
          {
            value: "40%",
            description: "Higher starting salaries for graduates with industry certifications.",
          },
        ],
      },
    },
    Programs: {
      programs: [
        {
          title: "Cybersecurity Programs",
          description: "Comprehensive cybersecurity education with hands-on labs and real-world scenarios.",
          certifications: ["Security+", "CySA+", "PenTest+"],
          duration: "2-4 semesters",
        },
        {
          title: "Cloud Computing",
          description: "Modern cloud infrastructure and services training for scalable solutions.",
          certifications: ["Cloud+", "Linux+", "Server+"],
          duration: "1-3 semesters",
        },
        {
          title: "Data Analytics",
          description: "Data-driven decision making with analytics and visualization tools.",
          certifications: ["Data+", "ITF+", "A+"],
          duration: "2-3 semesters",
        },
        {
          title: "Network Administration",
          description: "Network infrastructure design, implementation, and management.",
          certifications: ["Network+", "Server+", "Linux+"],
          duration: "2-4 semesters",
        },
      ],
    },
    Resources: {
      resources: [
        {
          title: "Faculty Development",
          description: "Professional development opportunities for instructors to stay current with industry trends.",
          buttonText: "Learn More",
        },
        {
          title: "Student Resources",
          description: "Study materials, practice exams, and learning paths for student success.",
          buttonText: "Access Resources",
        },
        {
          title: "Industry Partnerships",
          description: "Connect with employers and industry leaders for internship and job opportunities.",
          buttonText: "Explore Partnerships",
        },
        {
          title: "Research & Innovation",
          description: "Access to cutting-edge research and emerging technology insights.",
          buttonText: "View Research",
        },
      ],
    },
    "Success Stories": {
      stories: [
        {
          title: "University of Technology Success",
          description: "How integrating CompTIA certifications increased graduate employment rates by 85%.",
          institution: "University of Technology",
          outcome: "85% employment rate increase",
        },
        {
          title: "Community College Partnership",
          description: "A community college's journey to becoming a regional tech education leader.",
          institution: "Tech Community College",
          outcome: "Regional education leader",
        },
        {
          title: "Online Learning Innovation",
          description: "Adapting CompTIA programs for hybrid and online learning environments.",
          institution: "Digital University",
          outcome: "Successful online adaptation",
        },
      ],
    },
  };

  const currentData = contentData[selectedTab];

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-white py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-1">
          <span style={{ color: "#951A6B" }}>Higher Education</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Partner with CompTIA to prepare students for successful tech careers with industry-recognized certifications and practical skills.
        </p>
      </div>

      {/* Tab Bar Section */}
      <div className="px-4 md:px-8 mb-8">
        <TabBar
          tabs={tabs}
          activeTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>

      {/* Dynamic Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        {selectedTab === "Overview" && (
          <>
            {/* Top Section: Left + Right Cards */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="lg:flex-[2] flex flex-col gap-6">
                {currentData.topCards.map((card, index) => (
                  <TopCard key={index} card={card} />
                ))}
              </div>

              {/* Stats Section */}
              <div className="lg:flex-[1] bg-white rounded-lg shadow-sm border p-8">
                <h3 className="text-sm font-semibold mb-6 tracking-wide bg-gradient-to-r from-[#cf4400] via-[#c8102e] via-[#a11661] via-[#7d1d7e] to-[#4e25a1] bg-clip-text text-transparent">
                  {currentData.stats.heading}
                </h3>
                <div className="flex flex-col gap-6">
                  {currentData.stats.items.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {selectedTab === "Programs" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Academic Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentData.programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.certifications.map((cert, certIndex) => (
                        <span key={certIndex} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Duration: {program.duration}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "Resources" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Academic Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentData.resources.map((resource, index) => (
                <Card
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  buttonText={resource.buttonText}
                  width="w-full"
                  height="h-[200px]"
                  hasImage={false}
                  isSpecialCard={true}
                />
              ))}
            </div>
          </div>
        )}

        {selectedTab === "Success Stories" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="space-y-6">
              {currentData.stories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-800">{story.institution}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {story.outcome}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 w-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Academic Programs?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Join thousands of higher education institutions that have partnered with CompTIA to provide industry-relevant education and prepare students for successful tech careers.
          </p>
          <button className="px-6 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-200">
            Partner with CompTIA
          </button>
        </div>
      </div>
    </div>
  );
}