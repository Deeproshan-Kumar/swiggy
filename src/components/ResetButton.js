import React from "react";

const ResetButton = ({ onClick, label }) => {
  return (
    <button
      className="h-10 w-10 rounded-full flex justify-center items-center text-sm font-medium bg-black text-white border shadow-sm cursor-pointer transition-all duration-200 transform hover:-rotate-[90deg]"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ResetButton;