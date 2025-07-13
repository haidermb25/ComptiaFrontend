import TabBar from "@/components/shared/tabBar/TabBar";
import Card from "@/components/exploreCareer/Card";

export default function ExploreIndustries() {
  const tabs = ["All technologies", "Cybersecurity", "Networking", "Cloud", "AI/Data"];

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-1">
          Explore <span style={{ color: '#951A6B' }}>Industries</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Dive into different tech industry sectors to discover trends, opportunities, and how to align your skills with market needs.
        </p>
      </div>

      {/* Tab Bar Section */}
      <div className="px-4 md:px-8">
        <TabBar tabs={tabs} />
      </div>

      {/* Cards Grid Section */}
      {/* Cards Grid Section */}
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {Array.from({ length: 8 }).map((_, index) => (
            <Card
            key={index}
            title={`Industry ${index + 1}`}
            description="Discover industry-specific insights, career options, and key technologies transforming the sector."
            buttonText="Explore"
            width="w-full"
            height="h-[250px]"
            hasImage={false}
            isSpecialCard={true}
            />
        ))}
        </div>

    </div>
  );
}
