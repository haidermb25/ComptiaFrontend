"use client";
import React, { useState } from "react";
import TabBar from "@/components/shared/tabBar/TabBar";
import TopCard from "@/components/home/TopCard";
import StatCard from "@/components/home/StatCard";
import Card from "@/components/exploreCareer/Card";

export default function Student() {
  const tabs = ["Overview", "Certifications", "Resources", "Career Paths"];
  const [selectedTab, setSelectedTab] = useState("Overview");

  const contentData = {
    Overview: {
      topCards: [
        {
          title: "Start Your Tech Career Journey Today",
          description: "CompTIA certifications provide students with industry-recognized skills and credentials that open doors to exciting tech careers. Whether you're in high school, college, or university, our programs help you build a strong foundation for success.",
          buttonText: "Explore Certifications",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
          gradient: true,
        },
        {
          title: "Learn Skills That Employers Actually Want",
          description: "Our certifications are developed with input from industry experts and employers, ensuring you learn the skills that are in high demand in today's job market. Stand out from the competition with practical, hands-on experience.",
          buttonText: "View Career Paths",
          imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
          gradient: false,
        },
      ],
      stats: {
        heading: "Student Success",
        items: [
          {
            value: "95%",
            description: "Of students with CompTIA certifications find jobs within 6 months of graduation.",
          },
          {
            value: "40%",
            description: "Higher starting salaries for students with industry certifications.",
          },
          {
            value: "2.5M+",
            description: "Students worldwide have earned CompTIA certifications.",
          },
        ],
      },
    },
    Certifications: {
      certifications: [
        {
          title: "IT Fundamentals (ITF+)",
          description: "Perfect for beginners! Learn the basics of IT concepts, hardware, software, and networking.",
          level: "Entry Level",
          duration: "3-6 months",
          cost: "Free for students",
          skills: ["IT Basics", "Hardware", "Software", "Networking"],
        },
        {
          title: "A+ Certification",
          description: "The industry standard for IT support roles. Learn hardware, software, and troubleshooting.",
          level: "Entry Level",
          duration: "6-12 months",
          cost: "Student discount available",
          skills: ["Hardware", "Software", "Troubleshooting", "Customer Service"],
        },
        {
          title: "Network+ Certification",
          description: "Build networking skills for roles in network administration and support.",
          level: "Intermediate",
          duration: "6-12 months",
          cost: "Student discount available",
          skills: ["Networking", "Security", "Troubleshooting", "Infrastructure"],
        },
        {
          title: "Security+ Certification",
          description: "Learn cybersecurity fundamentals for security analyst and administrator roles.",
          level: "Intermediate",
          duration: "6-12 months",
          cost: "Student discount available",
          skills: ["Cybersecurity", "Risk Management", "Incident Response", "Compliance"],
        },
        {
          title: "Cloud+ Certification",
          description: "Master cloud computing concepts for cloud engineer and administrator positions.",
          level: "Intermediate",
          duration: "6-12 months",
          cost: "Student discount available",
          skills: ["Cloud Computing", "Virtualization", "Security", "Automation"],
        },
        {
          title: "Data+ Certification",
          description: "Learn data analytics and visualization for data analyst and business intelligence roles.",
          level: "Intermediate",
          duration: "6-12 months",
          cost: "Student discount available",
          skills: ["Data Analysis", "Visualization", "Statistics", "Business Intelligence"],
        },
      ],
    },
    Resources: {
      resources: [
        {
          title: "Study Materials",
          description: "Access comprehensive study guides, practice exams, and learning resources for all certifications.",
          buttonText: "Access Materials",
        },
        {
          title: "Student Discounts",
          description: "Save money on certification exams and study materials with our student discount program.",
          buttonText: "Get Discounts",
        },
        {
          title: "Practice Labs",
          description: "Hands-on virtual labs to practice real-world scenarios and build practical skills.",
          buttonText: "Start Labs",
        },
        {
          title: "Study Groups",
          description: "Connect with other students studying for the same certifications and share knowledge.",
          buttonText: "Join Groups",
        },
        {
          title: "Career Guidance",
          description: "Get personalized career advice and guidance on choosing the right certification path.",
          buttonText: "Get Guidance",
        },
        {
          title: "Industry Connections",
          description: "Connect with professionals and companies for internships, mentorship, and job opportunities.",
          buttonText: "Make Connections",
        },
      ],
    },
    "Career Paths": {
      careerPaths: [
        {
          title: "IT Support Specialist",
          description: "Help users troubleshoot technical issues and maintain computer systems.",
          certifications: ["ITF+", "A+"],
          salary: "$45,000 - $65,000",
          growth: "High",
        },
        {
          title: "Network Administrator",
          description: "Design, implement, and maintain network infrastructure for organizations.",
          certifications: ["A+", "Network+"],
          salary: "$55,000 - $85,000",
          growth: "High",
        },
        {
          title: "Cybersecurity Analyst",
          description: "Protect systems and networks from cyber threats and security breaches.",
          certifications: ["A+", "Network+", "Security+"],
          salary: "$65,000 - $95,000",
          growth: "Very High",
        },
        {
          title: "Cloud Engineer",
          description: "Design and manage cloud infrastructure and services for scalable applications.",
          certifications: ["A+", "Network+", "Cloud+"],
          salary: "$70,000 - $110,000",
          growth: "Very High",
        },
        {
          title: "Data Analyst",
          description: "Analyze data to help organizations make informed business decisions.",
          certifications: ["ITF+", "Data+"],
          salary: "$55,000 - $85,000",
          growth: "High",
        },
        {
          title: "Systems Administrator",
          description: "Manage and maintain server infrastructure and IT systems for organizations.",
          certifications: ["A+", "Network+", "Server+"],
          salary: "$60,000 - $90,000",
          growth: "High",
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
          <span style={{ color: "#951A6B" }}>Students</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Start your tech career journey with industry-recognized certifications and practical skills that employers value.
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

        {selectedTab === "Certifications" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentData.certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Level:</span>
                      <span className="text-sm font-medium text-gray-800">{cert.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="text-sm font-medium text-gray-800">{cert.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Cost:</span>
                      <span className="text-sm font-medium text-green-600">{cert.cost}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {skill}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Resources</h2>
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

        {selectedTab === "Career Paths" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentData.careerPaths.map((career, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{career.title}</h3>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Recommended Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.certifications.map((cert, certIndex) => (
                          <span key={certIndex} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-500">Salary Range:</span>
                        <span className="text-sm font-medium text-gray-800 ml-2">{career.salary}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        career.growth === "Very High" ? "bg-green-100 text-green-800" :
                        career.growth === "High" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {career.growth} Growth
                      </span>
                    </div>
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
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Join millions of students who have used CompTIA certifications to launch successful tech careers and achieve their professional goals.
          </p>
          <button className="px-6 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}