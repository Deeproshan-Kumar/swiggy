import React, { act, useState } from "react";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import MenuList from "./MenuList";

const RestaurantMenu = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-white my-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={setActive(!active)}
      >
        <h3 className="font-bold text-lg">
          {data?.title}{" "}
          {data?.itemCards.length && <>({data?.itemCards.length})</>}
        </h3>
        <button>
          <PiCaretDown />
        </button>
      </div>
      {active && <MenuList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantMenu;
