"use client";
import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6">
          <div className="lg:flex-[2] flex flex-col gap-4 sm:gap-6">
            {/* Component 1 */}
            <div className="bg-white rounded-lg shadow-sm border h-auto sm:h-[400px]">
              <div className="p-4 sm:p-8 h-full flex flex-col sm:flex-row items-center">
                <div className="flex-1 sm:pr-6 order-2 sm:order-1">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-0 bg-gradient-to-r from-[#cf4400] via-[#c8102e] via-[#a11661] via-[#7d1d7e] to-[#4e25a1] bg-clip-text text-transparent leading-tight">
                    Unlock your potential in tech
                  </h2>
                  <div className="text-black leading-relaxed mb-6 text-sm sm:text-base mt-3">
                    <p>Together we will get you the tech career you deserve with industry-leading certifications, training, and expert knowledge.</p>
                  </div>
                  <button className="px-4 sm:px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 text-sm sm:text-base">
                    View all certifications
                  </button>
                </div>
                <div className="flex-shrink-0 mb-4 sm:mb-0 order-1 sm:order-2">
                  <div className="w-full sm:w-[220px] h-[200px] sm:h-[260px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                      src="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90"
                      alt="Tech professional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Component 2 */}
            <div className="bg-white rounded-lg shadow-sm border h-auto sm:h-[400px]">
              <div className="p-4 sm:p-8 h-full flex flex-col sm:flex-row items-center">
                <div className="flex-1 sm:pr-6 order-2 sm:order-1">
                  <h2 className="text-xl sm:text-3xl font-bold mb-0 text-black leading-tight">
                    Shape the future with a tech career. Discover your next role
                  </h2>
                  <div className="text-black leading-relaxed mb-6 text-sm sm:text-base mt-3">
                    <p>Tech roles drive innovation, enable business success, and create solutions that shape the future—what's your next role?</p>
                  </div>
                  <button className="px-4 sm:px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 text-sm sm:text-base">
                    Explore careers
                  </button>
                </div>
                <div className="flex-shrink-0 mb-4 sm:mb-0 order-1 sm:order-2">
                  <div className="w-full sm:w-[220px] h-[200px] sm:h-[260px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                      src="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90"
                      alt="Tech workplace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-[1] bg-white rounded-lg shadow-sm border h-auto sm:h-[832px] mt-4 sm:mt-0">
            <div className="p-4 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-semibold mb-4 sm:mb-6 tracking-wide bg-gradient-to-r from-[#cf4400] via-[#c8102e] via-[#a11661] via-[#7d1d7e] to-[#4e25a1] bg-clip-text text-transparent">
                  KEY TECH STATISTICS
                </h3>
                
                <div className="mb-8 sm:mb-12">
                  <div className="text-4xl sm:text-7xl font-bold text-red-600 mb-3">130%</div>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    higher median US salaries for tech than other careers, demonstrating the financial advantages and opportunities available in the tech industry.
                  </p>
                </div>
                
                <div className="mb-8 sm:mb-12">
                  <div className="text-4xl sm:text-7xl font-bold text-red-600 mb-3">7 in 10</div>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    companies recognize digital skills as a critical factor for their success, emphasizing the growing demand for a tech-savvy workforce in today's rapidly evolving digital economy.
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl sm:text-7xl font-bold text-red-600 mb-3">2x</div>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    growth rate in US tech occupations compared to national job growth over the next 10 years, highlighting the increasing demand for skilled tech workers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="lg:flex-[2] bg-gray-100 rounded-lg shadow-sm border h-auto sm:h-[500px]">
            <div className="p-4 sm:p-5 h-full flex flex-col">
              <h2 className="text-lg sm:text-xl font-bold mb-3 text-black">Real success stories</h2>
              <p className="text-black mb-4 sm:mb-5 text-sm sm:text-base">
                Discover how CompTIA certifications open doors, fuel growth and advance the tech industry.
              </p>
              <button className="px-4 sm:px-5 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 mb-4 sm:mb-5 w-fit text-sm sm:text-base">
                View case study
              </button>
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Component 5 */}
                <div className="flex-1 bg-white rounded-lg p-4 sm:p-5 flex flex-col border shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                      <img
                        src="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2Fe293315ebdc811ef8968c6fadee89bdc%3Fwidth%3D56%26height%3D56&w=128&q=90"
                        alt="Chris Bramwell"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm sm:text-base">Chris Bramwell</h4>
                      <p className="text-xs sm:text-sm text-black">Chief Privacy Officer, State of Utah</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed flex-1">
                    "We knew as part of our maturity metrics and accountability, we wanted to show that we have staff that have the knowledge of cybersecurity and the Security+ certification helps validate that knowledge base. It's not just about having the certification, it's about understanding the fundamentals and being able to apply them in real-world scenarios."
                  </p>
                </div>
                
                {/* Component 6 */}
                <div className="flex-1 bg-white rounded-lg p-4 sm:p-5 flex flex-col border shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                      <img
                        src="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2Fc37bc9c2bdcb11ef8968c6fadee89bdc%3Fwidth%3D56%26height%3D56&w=128&q=90"
                        alt="Phil Bates"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm sm:text-base">Phil Bates</h4>
                      <p className="text-xs sm:text-sm text-black">CISO, State of Utah</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed flex-1">
                    "Having a program like CompTIA is a repeatable process for us so if I've got to bring in new folks, having that base-level of talent you can go back to repeatedly ensures consistency in our hiring process and helps new team members get up to speed quickly."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-[1] h-auto flex flex-col justify-start items-start p-0">
            <h3 className="text-xs font-semibold mb-2 sm:mb-3 tracking-wide text-[rgb(183,15,42)]">COMPTIA BLOG</h3>
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">Your go-to blog for tech success</h2>
            <p className="text-black mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Gain insight into a range of topics including career success stories, industry trends, cybersecurity and training resources to help individuals and organizations thrive in the tech industry.
            </p>
            <button className="px-4 sm:px-5 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 w-fit text-sm sm:text-base">
              Visit blog
            </button>
          </div>
        </div>

        {/* Component 7 - Stack on mobile, row on larger screens */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="lg:flex-[2] bg-white rounded-lg shadow-sm border h-auto sm:h-[520px] pb-6 sm:pb-10">
            <div className="p-4 sm:p-10 h-full flex flex-col">
              <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-5 text-black">
                Passion Meets Innovation: College of DuPage Prepares IT Students for Success
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start flex-1">
                <div className="flex-1">
                  <p className="text-black leading-relaxed mb-4 text-sm sm:text-base">
                    The College of DuPage (COD) empowers students for success in the fast-paced world of IT through dedicated teaching, industry-relevant skills, and a long-standing partnership with CompTIA. CompTIA certifications play a key role in bridging the gap between education and workforce needs, giving students a competitive edge as they launch rewarding IT careers aligned with their passions. Together, COD and CompTIA inspire the next generation of IT professionals to thrive in a dynamic and ever-evolving field.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <div className="w-full sm:w-[260px] h-[200px] sm:h-[220px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                      src="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c758814bdc411efbd8fb24132066c22&w=1080&q=90"
                      alt="College of DuPage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 text-sm sm:text-base w-fit">
                Learn more
              </button>
            </div>
          </div>
          <div className="lg:flex-[1] h-auto flex flex-col items-start p-0">
            <h3 className="text-xs font-semibold mb-1 sm:mb-2 tracking-wide text-[rgb(183,15,42)]">
              STAY CONNECTED
            </h3>
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-black">
              Empower your career
            </h2>
            <p className="text-black mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Stay connected with expert advice and updates.
            </p>
            <button className="px-4 sm:px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 text-sm sm:text-base">
              Connect with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;