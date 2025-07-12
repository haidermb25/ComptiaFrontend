import Card from "@/components/exploreCareer/Card";

export default function careerPlus() {

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-white py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-1">
        <span style={{ color: '#951A6B' }}>Careers +</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Inspire the next first step in your career
        </p>
      </div>

      {/* Cards Grid Section */}
      {/* Cards Grid Section */}
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {Array.from({ length: 8 }).map((_, index) => (
            <Card
            key={index}
            title={`Industry ${index + 1}`}
            description="Discover industry-specific insights, career options, and key technologies transforming the sector."
            buttonText="Explore"
            width="w-[600px]"
            height="h-[200px]"
            hasImage={false}
            isSpecialCard={true}
            />
        ))}
        </div>

    </div>
  );
}
