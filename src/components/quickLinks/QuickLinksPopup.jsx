"use client";

const QuickLinksPopup = ({ onClose }) => {
  return (
    <div className="fixed left-[50px] top-1/2 transform -translate-y-1/2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-[100] overflow-hidden">
      {/* Close button */}
      <div className="flex justify-end p-3">
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
      </div>
      
      <div className="px-4 pb-4">
        <h3 className="font-bold text-gray-800 mb-4">Popular</h3>
        <ul className="space-y-3 mb-6">
          {['A+', 'Network+', 'Security+', 'CySA+', 'PenTest+'].map((item) => (
            <li key={item} className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">
              {item}
            </li>
          ))}
        </ul>
        
        <h3 className="font-bold text-gray-800 mb-4">Digital Skills</h3>
        <ul className="space-y-3">
          {['AI Essentials', 'Project+', 'Office Pro'].map((item) => (
            <li key={item} className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickLinksPopup;