import React from "react";

const FilterButton = ({ onClick, label, isActive }) => {
  return (
    <button
      className={`${
        isActive
          ? "text-sm text-nowrap font-medium text-black border shadow-sm border-black rounded-full py-1 px-3 cursor-pointer dark:text-white dark:border-white"
          : "text-sm text-nowrap font-medium text-gray-600 border shadow-sm rounded-full py-1 px-3 cursor-pointer dark:border-gray-500"
      } px-4 py-2 rounded-full dark:text-gray-500 dark:shadow-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;
