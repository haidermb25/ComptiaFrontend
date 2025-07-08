"use client";
import Link from 'next/link';

const SubMenu = ({ items }) => {
  return (
    <div className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;