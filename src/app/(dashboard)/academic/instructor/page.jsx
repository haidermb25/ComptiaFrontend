"use client";
import React, { useState } from "react";
import TabBar from "@/components/shared/tabBar/TabBar";
import TopCard from "@/components/home/TopCard";
import StatCard from "@/components/home/StatCard";
import Card from "@/components/exploreCareer/Card";

export default function Instructor() {
  const tabs = ["Overview", "Training", "Resources", "Community"];
  const [selectedTab, setSelectedTab] = useState("Overview");

  const contentData = {
    Overview: {
      topCards: [
        {
          title: "Empower Your Teaching with Industry Expertise",
          description: "Join thousands of instructors who use CompTIA certifications to enhance their curriculum and prepare students for successful tech careers. Access comprehensive teaching resources and stay current with industry trends.",
          buttonText: "Get Started",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
          gradient: true,
        },
        {
          title: "Professional Development for Educators",
          description: "Stay ahead of the curve with ongoing professional development opportunities, industry insights, and teaching best practices that help you deliver cutting-edge tech education.",
          buttonText: "Explore Training",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
          gradient: false,
        },
      ],
      stats: {
        heading: "Instructor Impact",
        items: [
          {
            value: "15,000+",
            description: "Instructors worldwide use CompTIA certifications in their teaching.",
          },
          {
            value: "90%",
            description: "Of instructors report improved student engagement and outcomes.",
          },
          {
            value: "200+",
            description: "Professional development events hosted annually for educators.",
          },
        ],
      },
    },
    Training: {
      trainingPrograms: [
        {
          title: "Instructor Certification Program",
          description: "Become a certified CompTIA instructor with comprehensive training on our certification programs and teaching methodologies.",
          duration: "4-6 weeks",
          format: "Online & In-Person",
          level: "All Levels",
        },
        {
          title: "Curriculum Integration Workshop",
          description: "Learn how to seamlessly integrate CompTIA certifications into your existing curriculum and maximize student success.",
          duration: "2-3 days",
          format: "Workshop",
          level: "Intermediate",
        },
        {
          title: "Industry Trends & Updates",
          description: "Stay current with the latest technology trends and certification updates to keep your teaching relevant and engaging.",
          duration: "Ongoing",
          format: "Webinars & Events",
          level: "All Levels",
        },
        {
          title: "Teaching Excellence Program",
          description: "Develop advanced teaching skills and learn innovative instructional strategies for technical education.",
          duration: "8-12 weeks",
          format: "Hybrid",
          level: "Advanced",
        },
      ],
    },
    Resources: {
      resources: [
        {
          title: "Teaching Materials",
          description: "Access comprehensive lesson plans, presentations, and hands-on lab materials for all CompTIA certifications.",
          buttonText: "Access Materials",
        },
        {
          title: "Assessment Tools",
          description: "Use our assessment tools and practice exams to evaluate student progress and prepare them for certification.",
          buttonText: "Get Tools",
        },
        {
          title: "Student Success Resources",
          description: "Help your students succeed with study guides, career guidance, and industry connection opportunities.",
          buttonText: "View Resources",
        },
        {
          title: "Technical Support",
          description: "Get technical support and guidance for implementing CompTIA programs in your classroom.",
          buttonText: "Get Support",
        },
      ],
    },
    Community: {
      communityFeatures: [
        {
          title: "Instructor Network",
          description: "Connect with fellow instructors, share best practices, and collaborate on innovative teaching approaches.",
          members: "15,000+",
          type: "Global Network",
        },
        {
          title: "Teaching Forums",
          description: "Participate in discussions about teaching strategies, curriculum development, and student success stories.",
          members: "Active Community",
          type: "Discussion Forums",
        },
        {
          title: "Mentorship Program",
          description: "Connect with experienced instructors for guidance and support in your teaching journey.",
          members: "1,000+ Mentors",
          type: "Peer Support",
        },
        {
          title: "Annual Conference",
          description: "Attend our annual instructor conference to network, learn, and celebrate teaching excellence.",
          members: "500+ Attendees",
          type: "Annual Event",
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
          <span style={{ color: "#951A6B" }}>Instructors</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Empower your teaching with industry-recognized certifications and comprehensive resources to prepare students for successful tech careers.
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

        {selectedTab === "Training" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Development Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentData.trainingPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="text-sm font-medium text-gray-800">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Format:</span>
                      <span className="text-sm font-medium text-gray-800">{program.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Level:</span>
                      <span className="text-sm font-medium text-gray-800">{program.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "Resources" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Teaching Resources</h2>
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

        {selectedTab === "Community" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Instructor Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentData.communityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-800">{feature.members}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {feature.type}
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
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Join our community of educators and access the resources you need to prepare students for successful tech careers.
          </p>
          <button className="px-6 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-200">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  );
}