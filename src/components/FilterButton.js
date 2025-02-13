import React from "react";

const FilterButton = ({ onClick, label, isActive }) => {
  return (
    <button
      className={`${
        isActive
          ? "text-sm text-nowrap font-medium text-black border shadow-sm border-black rounded-full py-1 px-3 cursor-pointer"
          : "text-sm text-nowrap font-medium text-gray-600 border shadow-sm rounded-full py-1 px-3 cursor-pointer"
      } px-4 py-2 rounded-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;
