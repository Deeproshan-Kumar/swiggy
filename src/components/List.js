import React from "react";

const List = ({ link, text }) => {
  return (
    <li className="list-none p-2">
      <a href={link} className="block rounded-lg border border-black-500 text-md text-center font-semibold text-gray-700 p-4 transition-all duration-300 hover:text-black dark:text-gray-500 dark:hover:text-white">{text}</a>
    </li>
  );
};

export default List;
