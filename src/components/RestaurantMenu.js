import React from "react";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import MenuList from "./MenuList";

const RestaurantMenu = ({ data, showItems, setShowIndex }) => {
  return (
    <div
      className={
        showItems ? "bg-white py-5 dark:bg-black" : "bg-white border-b border-b-gray-300 py-5 dark:bg-black dark:border-b-gray-500"
      }
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={setShowIndex}
      >
        <h3 className="font-bold text-lg dark:text-white">
          {data?.title}{" "}
          {data?.itemCards.length && <>({data?.itemCards.length})</>}
        </h3>
        <button className="dark:text-white">{showItems ? <PiCaretDown /> : <PiCaretUp />}</button>
      </div>
      {showItems && <MenuList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantMenu;
