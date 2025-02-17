import React from "react";

const FilterButton = ({ onClick, label, isActive }) => {
  return (
    <button
      className={`${
        isActive
          ? "text-sm text-nowrap font-medium text-black border border-black rounded-full py-1 px-3 cursor-pointer dark:text-white dark:border-white"
          : "text-sm text-nowrap font-medium text-gray-600 border rounded-full py-1 px-3 cursor-pointer dark:border-gray-500"
      } px-4 py-2 rounded-full transition-all duration-300 hover:text-black dark:text-gray-500 dark:shadow-none dark:hover:text-white`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;
