"use client";

const QuickLinksPopup = ({ onClose }) => {
  const sections = [
    {
      title: "Popular",
      items: ['A+', 'Network+', 'Security+', 'CySA+', 'PenTest+']
    },
    {
      title: "Digital Skills",
      items: ['AI Essentials', 'Project+', 'Office Pro']
    },
    {
      title: "Entry Level",
      items: ['Tech+', 'Data+', 'a+ Cyber']
    }
  ];

  return (
    <div className="fixed left-0 top-[15vh] w-[250px] max-h-[85vh] bg-white shadow-xl border border-gray-200 z-[100] flex flex-col">
      
      {/* Sticky Close Button */}
      <div className="sticky top-0 bg-white z-10 flex justify-end p-2 border-b border-black w-[86%] mx-auto">
  <button
    onClick={onClose}
    className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
  >
    X
  </button>
</div>


      {/* Scrollable Sections */}
      <div className="overflow-y-auto px-4 py-2 custom-scrollbar">
  {sections.map((section) => (
    <div key={section.title} className="pt-4 pb-3 border-b border-black">
      <h3 className=" text-lg text-gray-800 mb-3">{section.title}</h3>
      <ul className="space-y-4">
        {section.items.map((item) => (
          <li
            key={item}
            className="text-gray-800 hover:text-blue-600 cursor-pointer text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

    </div>
  );
};

export default QuickLinksPopup;
