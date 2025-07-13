// app/page.js
import HomePage from '@/components/home/homepage';
import Card from "@/components/exploreCareer/Card";
import CertificationGrid from "@/components/certifications/CertificationsGrid";

export default function Home() {
  return (
    <div className="w-full bg-gray-50 relative" style={{
      backgroundImage: 'url(https://images.cmp.optimizely.com/d7bcb87c9d3e11efacace2115a019d6d)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header Section */}
      <div className="bg-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Explore <span className="text-red-600">Careers</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Inspire the first step in your career. Explore tech careers or industry sectors to learn about earning potential, 
          hiring markets, top certifications, skill requirements, and more.
        </p>
      </div>

      {/* Homepage Components */}
      <div className="bg-white">
        <HomePage />
      </div>

      {/* First Section - Two Cards Side by Side (Full Screen Height) */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
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
      </div>

      {/* Second Section - Full Width Card */}
      <div className="px-8 py-12">
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
      </div>

      {/* Third Section - Two Smaller Cards Side by Side (No Images) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
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
      </div>

      {/* NEW SECTION - Certifications Grid */}
      <div className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CompTIA <span className="text-red-600">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the right certification path for your career goals. From entry-level to expert, 
            CompTIA certifications validate your skills and open doors to new opportunities.
          </p>
        </div>
        <CertificationGrid />
      </div>
    </div>
  );
}