"use client";

const QuickLinksButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-[100] hover:opacity-90 transition-opacity border-0 rounded-r-lg shadow-lg"
      aria-label="Quick Links"
      style={{ 
        writingMode: 'vertical-rl', 
        textOrientation: 'mixed',
        width: '50px',
        height: '200px',
        backgroundColor: '#C8272E'
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-white relative">
        <span className="font-semibold text-sm tracking-wider transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Quick links
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 absolute bottom-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default QuickLinksButton;