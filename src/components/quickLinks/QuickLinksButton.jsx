"use client"

const QuickLinksButton = ({ onClick, isOpen }) => {
  return (
    <button 
      onClick={onClick}
      className={`fixed ${isOpen ? 'left-[250px]' : 'left-0'}  transform -translate-y-1/2 z-[1] hover:opacity-90 transition-opacity border-0 rounded-r-lg shadow-lg flex flex-row items-center justify-center gap-2 text-white cursor-pointer`}
      aria-label="Quick Links"
      style={{ 
        top: `calc(15vh + 74px)`,
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        width: '50px',
        height: '150px',
        backgroundColor: '#C8272E'
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-5 h-5"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>

      <span className="text-base font-bold">Quick links</span>
    </button>
  );
};

export default QuickLinksButton;
