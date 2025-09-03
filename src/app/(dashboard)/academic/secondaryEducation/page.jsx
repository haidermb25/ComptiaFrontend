"use client";
import React, { useState } from "react";
import TabBar from "@/components/shared/tabBar/TabBar";
import TopCard from "@/components/home/TopCard";
import StatCard from "@/components/home/StatCard";
import Card from "@/components/exploreCareer/Card";

export default function SecondaryEducation() {
  const tabs = ["Overview", "Programs", "Resources", "Success Stories"];
  const [selectedTab, setSelectedTab] = useState("Overview");

  const contentData = {
    Overview: {
      topCards: [
        {
          title: "Preparing Students for Tech Careers from Day One",
          description: "CompTIA's secondary education programs introduce students to technology careers early, building foundational skills and career awareness that set them up for success in higher education and beyond.",
          buttonText: "Explore Programs",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
          gradient: true,
        },
        {
          title: "Early Career Exploration and Skill Development",
          description: "Help students discover their passion for technology through hands-on learning experiences, industry connections, and real-world projects that make learning engaging and relevant.",
          buttonText: "Learn More",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
          gradient: false,
        },
      ],
      stats: {
        heading: "Secondary Education Impact",
        items: [
          {
            value: "5,000+",
            description: "Secondary schools partner with CompTIA to offer tech education.",
          },
          {
            value: "75%",
            description: "Of students report increased interest in tech careers after program participation.",
          },
          {
            value: "3x",
            description: "Higher college enrollment in tech programs for students with early exposure.",
          },
        ],
      },
    },
    Programs: {
      programs: [
        {
          title: "IT Fundamentals (ITF+)",
          description: "Introduction to basic IT concepts, hardware, software, and networking fundamentals for beginners.",
          gradeLevel: "9-12",
          duration: "1 semester",
          certifications: ["ITF+"],
        },
        {
          title: "Computer Hardware & Software",
          description: "Hands-on learning about computer components, troubleshooting, and basic software applications.",
          gradeLevel: "10-12",
          duration: "1 semester",
          certifications: ["A+"],
        },
        {
          title: "Cybersecurity Basics",
          description: "Introduction to cybersecurity concepts, online safety, and digital citizenship.",
          gradeLevel: "9-12",
          duration: "1 semester",
          certifications: ["ITF+", "Security+"],
        },
        {
          title: "Digital Literacy & Productivity",
          description: "Essential digital skills including office applications, online collaboration, and digital communication.",
          gradeLevel: "9-12",
          duration: "1 semester",
          certifications: ["ITF+"],
        },
        {
          title: "Web Development Fundamentals",
          description: "Introduction to web design, HTML, CSS, and basic programming concepts.",
          gradeLevel: "10-12",
          duration: "1-2 semesters",
          certifications: ["ITF+"],
        },
        {
          title: "Career Exploration in Tech",
          description: "Exposure to various tech careers through guest speakers, field trips, and project-based learning.",
          gradeLevel: "11-12",
          duration: "1 semester",
          certifications: ["Career Readiness"],
        },
      ],
    },
    Resources: {
      resources: [
        {
          title: "Curriculum Materials",
          description: "Comprehensive lesson plans, activities, and assessments aligned with educational standards.",
          buttonText: "Access Materials",
        },
        {
          title: "Teacher Training",
          description: "Professional development for educators to effectively teach technology concepts.",
          buttonText: "Get Training",
        },
        {
          title: "Student Resources",
          description: "Interactive learning tools, practice exams, and career exploration resources.",
          buttonText: "View Resources",
        },
        {
          title: "Industry Connections",
          description: "Connect students with local tech professionals and companies for mentorship.",
          buttonText: "Find Connections",
        },
        {
          title: "Competition Opportunities",
          description: "Participate in tech competitions and challenges to showcase student skills.",
          buttonText: "Join Competitions",
        },
        {
          title: "College & Career Planning",
          description: "Guidance on tech education pathways and career planning resources.",
          buttonText: "Plan Your Future",
        },
      ],
    },
    "Success Stories": {
      stories: [
        {
          title: "High School Tech Academy Success",
          description: "A high school's transformation into a regional tech education leader, with 90% of graduates pursuing tech careers.",
          school: "Tech Academy High School",
          outcome: "90% tech career pursuit",
        },
        {
          title: "Rural School Innovation",
          description: "How a rural school district used CompTIA programs to provide tech education opportunities to underserved students.",
          school: "Rural Tech Initiative",
          outcome: "Expanded access to tech education",
        },
        {
          title: "Dual Enrollment Success",
          description: "Partnership between high schools and community colleges to offer college credit for tech courses.",
          school: "Dual Enrollment Program",
          outcome: "College credit opportunities",
        },
        {
          title: "Industry Partnership Model",
          description: "Local businesses partnering with schools to provide real-world learning experiences and job shadowing.",
          school: "Industry-School Partnership",
          outcome: "Real-world experience",
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
          <span style={{ color: "#951A6B" }}>Secondary Education</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Prepare students for successful tech careers with early exposure to industry-recognized certifications and hands-on learning experiences.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Secondary Education Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentData.programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Grade Level:</span>
                      <span className="text-sm font-medium text-gray-800">{program.gradeLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="text-sm font-medium text-gray-800">{program.duration}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.certifications.map((cert, certIndex) => (
                        <span key={certIndex} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "Resources" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Educational Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentData.stories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-800">{story.school}</span>
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
            Ready to Transform Your School's Tech Education?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Join thousands of secondary schools that have partnered with CompTIA to provide students with early exposure to technology careers and industry-recognized skills.
          </p>
          <button className="px-6 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-200">
            Partner with CompTIA
          </button>
        </div>
      </div>
    </div>
  );
}