import React from "react";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import MenuList from "./MenuList";

const RestaurantMenu = ({ data, showItems, setShowIndex }) => {
  return (
    <div
      className={
        showItems ? "bg-white py-5" : "bg-white border-b border-b-gray-300 py-5"
      }
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={setShowIndex}
      >
        <h3 className="font-bold text-lg">
          {data?.title}{" "}
          {data?.itemCards.length && <>({data?.itemCards.length})</>}
        </h3>
        <button>{showItems ? <PiCaretDown /> : <PiCaretUp />}</button>
      </div>
      {showItems && <MenuList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantMenu;
