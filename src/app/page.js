// app/page.js
import HomePage from "@/components/home/homepage";
import Card from "@/components/exploreCareer/Card";
import CertificationGrid from "@/components/certifications/CertificationsGrid";

export default function Home() {

  const contentData = {
                    topCards: [
                      {
                        title: "Unlock your potential in tech",
                        description:
                          "Together we will get you the tech career you deserve with industry-leading certifications, training, and expert knowledge.",
                        buttonText: "View all certifications",
                        imageUrl:
                          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
                        gradient: true,
                      },
                      {
                        title:
                          "Shape the future with a tech career. Discover your next role",
                        description:
                          "Tech roles drive innovation, enable business success, and create solutions that shape the future—what's your next role?",
                        buttonText: "Explore careers",
                        imageUrl:
                          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
                        gradient: false,
                      },
                    ],
                    stats: {
                      heading: "KEY TECH STATISTICS",
                      items: [
                        {
                          value: "130%",
                          description:
                            "higher median US salaries for tech than other careers, demonstrating the financial advantages and opportunities available in the tech industry.",
                        },
                        {
                          value: "7 in 10",
                          description:
                            "companies recognize digital skills as a critical factor for their success, emphasizing the growing demand for a tech-savvy workforce in today's rapidly evolving digital economy.",
                        },
                        {
                          value: "2x",
                          description:
                            "growth rate in US tech occupations compared to national job growth over the next 10 years, highlighting the increasing demand for skilled tech workers.",
                        },
                      ],
                    },
                    success: {
                      title: "Real success stories",
                      description:
                        "Discover how CompTIA certifications open doors, fuel growth and advance the tech industry.",
                      buttonText: "View case study",
                      testimonials: [
                        {
                          name: "Chris Bramwell",
                          role: "Chief Privacy Officer, State of Utah",
                          quote:
                            "We knew as part of our maturity metrics and accountability, we wanted to show that we have staff that have the knowledge of cybersecurity and the Security+ certification helps validate that knowledge base. It's not just about having the certification, it's about understanding the fundamentals and being able to apply them in real-world scenarios.",
                          image:
                            "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2Fe293315ebdc811ef8968c6fadee89bdc%3Fwidth%3D56%26height%3D56&w=128&q=90",
                        },
                        {
                          name: "Phil Bates",
                          role: "CISO, State of Utah",
                          quote:
                            "Having a program like CompTIA is a repeatable process for us so if I've got to bring in new folks, having that base-level of talent you can go back to repeatedly ensures consistency in our hiring process and helps new team members get up to speed quickly.",
                          image:
                            "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2Fc37bc9c2bdcb11ef8968c6fadee89bdc%3Fwidth%3D56%26height%3D56&w=128&q=90",
                        },
                      ],
                    },
                    blog: {
                      heading: "COMPTIA BLOG",
                      title: "Your go-to blog for tech success",
                      description:
                        "Gain insight into a range of topics including career success stories, industry trends, cybersecurity and training resources to help individuals and organizations thrive in the tech industry.",
                      buttonText: "Visit blog",
                    },
                    college: {
                      title:
                        "Passion Meets Innovation: College of DuPage Prepares IT Students for Success",
                      description:
                        "The College of DuPage (COD) empowers students for success in the fast-paced world of IT through dedicated teaching, industry-relevant skills, and a long-standing partnership with CompTIA. CompTIA certifications play a key role in bridging the gap between education and workforce needs, giving students a competitive edge as they launch rewarding IT careers aligned with their passions. Together, COD and CompTIA inspire the next generation of IT professionals to thrive in a dynamic and ever-evolving field.",
                      buttonText: "Learn more",
                      image:
                        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c758814bdc411efbd8fb24132066c22&w=1080&q=90",
                    },
                    connect: {
                      heading: "STAY CONNECTED",
                      title: "Empower your career",
                      description: "Stay connected with expert advice and updates.",
                      buttonText: "Connect with us",
                    },
                  };


  return (
    <div
      className="w-full bg-gray-50 relative"
      style={{
        backgroundImage:
          "url(https://images.cmp.optimizely.com/d7bcb87c9d3e11efacace2115a019d6d)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header Section */}
      {/* <div className="bg-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Explore <span className="text-red-600">Careers</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Inspire the first step in your career. Explore tech careers or industry sectors to learn about earning potential, 
          hiring markets, top certifications, skill requirements, and more.
        </p>
      </div> */}

      {/* Homepage Components */}
      <div className="bg-white">
        <HomePage contentData={contentData} />
      </div>

      {/* First Section - Two Cards Side by Side (Full Screen Height) */}
      {/* <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <Card
          title="Explore tech careers"
          description="There's a tech job role for you, no matter your skill set, personality, ambition, or even tech know-how."
          buttonText="Learn more"
          width="w-full"
          height="h-full"
          hasImage={true}
          imageUrl="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F038e53aea6cf11ef9928d6747d7360e7&w=1080&q=90"
          isSpecialCard={true}
        />
        <Card
          title="Explore industry sectors"
          description="Comprehensive information spanning key industry sectors."
          buttonText="Learn more"
          width="w-full"
          height="h-full"
          hasImage={true}
          imageUrl="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90"
          isSpecialCard={true}
        />
      </div> */}

      {/* Second Section - Full Width Card */}
      {/* <div className="px-8 py-12">
        <Card
          title="Explore Careers+"
          description={
            <div>
              <p className="text-base mb-4">Dive deeper into your career possibilities with Careers+, showcasing in-demand tech job roles.</p>
            </div>
          }
          buttonText="Learn more"
          width="w-full"
          height="h-auto"
          fullWidthContent={true}
          hasImage={true}
          imageUrl="https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages2.cmp.optimizely.com%2Fd264fb2af3a411ef88e1064cb1ed2a11&w=1080&q=90"
          isSpecialCard={true}
          sideImage={true}
        />
      </div> */}

      {/* Third Section - Two Smaller Cards Side by Side (No Images) */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <Card
          title="Research highlight"
          description="CompTIA's Tech Jobs Report provides a monthly snapshot of information technology (IT) employment trending at the occupation and industry levels."
          buttonText="Learn more"
          width="w-full"
          height="h-[250px]"
          hasImage={false}
          isSpecialCard={true}
        />
        <Card
          title="Explore our blogs"
          description="CompTIA's Career Pathways provide a structured and comprehensive roadmap for learners to excel in high-demand IT careers."
          buttonText="Learn more"
          width="w-full"
          height="h-[250px]"
          hasImage={false}
          isSpecialCard={true}
        />
      </div> */}


    </div>
  );
}
