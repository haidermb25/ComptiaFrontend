"use client";
const SubMenu = ({ items, onItemClick }) => {
  return (
    <div className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={(e) =>{
              e.stopPropagation(); // Prevent click from bubbling up
              onItemClick(item);
            }}  // handle click
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
