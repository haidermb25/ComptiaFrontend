// components/home/homepage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Component 1 - Left (wider) */}
        <div className="md:w-2/3 bg-blue-50 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Unlock your potential in tech</h1>
          <p className="text-lg text-gray-700 mb-6">
            Together we will get you the tech career you deserve with industry-leading certifications, training, and expert knowledge.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md">
            View all certifications
          </button>
        </div>

        {/* Component 3 - Right (taller) */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">KEY TECH STATISTICS</h2>
          <div className="space-y-6">
            <div>
              <p className="text-2xl font-bold text-blue-600">130%</p>
              <p className="text-gray-600">
                higher median US salaries for tech than other careers, demonstrating the financial advantages and opportunities available in the tech industry.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">7 in 10</p>
              <p className="text-gray-600">
                companies recognize digital skills as a critical factor for their success, emphasizing the growing demand for a tech-savvy workforce in today's rapidly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Component 2 - Below Component 1 */}
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <span className="text-gray-500 mr-2">State & Local →</span>
            <span className="font-semibold text-blue-600">Federal →</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Shape the future with a tech career: Discover your next role</h2>
          <p className="text-gray-600 mb-4">
            Tech roles drive innovation, enable business success, and create solutions that shape the future—what's your next role?
          </p>
          <button className="text-blue-600 font-semibold hover:underline">
            Explore careers
          </button>
          <p className="text-gray-600 mt-4">
            tech-savvy workforce in today's rapidly evolving digital economy.
          </p>
          <p className="text-2xl font-bold text-blue-600 mt-4">2x</p>
          <p className="text-gray-600">
            growth rate in US tech occupations compared to national job growth over the next 10 years, highlighting the increasing demand for skilled tech workers.
          </p>
        </div>

        {/* Component 3 continues vertically (same as above) */}
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Component 4 - Wide card */}
        <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-md relative">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Real success stories</h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover how CompTIA certifications open doors, fuel growth and advance the tech industry.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md">
            View case study
          </button>

          {/* Components 5 & 6 inside Component 4 */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            {/* Component 5 */}
            <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Chris Bramwell</p>
              <p className="text-gray-600 text-sm mb-4">Chief Privacy Officer, State of Utah</p>
              <p className="text-gray-700 italic">
                "We knew as part of our maturity metrics and accountability, we wanted to show that we have staff that have the knowledge of
              </p>
            </div>

            {/* Component 6 */}
            <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Phil Bates</p>
              <p className="text-gray-600 text-sm mb-4">CISO, State of Utah</p>
              <p className="text-gray-700 italic">
                "Having a program like CompTIA is a repeatable process for us so if I've got to bring in new folks, having that base-level of talent
              </p>
            </div>
          </div>

          {/* Bottom part of Component 4 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your go-to blog for tech success</h3>
            <p className="text-gray-600 mb-4">
              Gain insight into a range of topics including career success stories, industry trends, cybersecurity and training resources to help individuals and organizations thrive in the tech industry.
            </p>
            <div className="border-t pt-4">
              <button className="text-blue-600 font-semibold hover:underline">
                Visit blog
              </button>
              <ul className="flex space-x-6 mt-4 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">Get latest updates</li>
                <li className="hover:text-blue-600 cursor-pointer">Get more data</li>
                <li className="hover:text-blue-600 cursor-pointer">Get more information</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Component 7 - Below Component 4 */}
        <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Passion Meets Innovation: College of DuPage Prepares IT Students for Success</h1>
          <p className="text-gray-600 mb-6">
            The College of DuPage (COD) empowers students for success in the fast-paced world of IT through dedicated teaching, industry-relevant skills, and a long-standing partnership with CompTIA.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md mb-6">
            Learn more
          </button>
          
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-2">STAY CONNECTED</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">Empower your career</span>
              </li>
              <li className="text-gray-500 text-sm">
                Stay connected with expert advice and updates.
              </li>
              <li className="flex items-center mt-2">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">Connect with us</span>
              </li>
            </ul>
            <button className="mt-4 text-blue-600 font-semibold hover:underline">
              Get latest updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;