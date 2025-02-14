import React, { useContext, useEffect } from "react";
import SwiggyImage from "../../../public/swiggy.svg";
import menus from "../../utils/menus";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import { HiStatusOnline } from "react-icons/hi";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cart = useSelector((state) => state.items);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 dark:bg-black dark:shadow-none dark:border-b-[1px] dark:border-b-gray-700">
      <div className="container h-[80px] mx-auto flex justify-between items-center">
        <div>
          <NavLink to="/" className="flex gap-1">
            <img src={SwiggyImage} alt="Swiggy" className="h-auto" />
            {onlineStatus && (
              <HiStatusOnline className="text-[#ff5200]" title={"Online"} />
            )}
          </NavLink>
        </div>
        <ul className="flex gap-14 max-lg:gap-10 max-md:gap-4">
          {menus &&
            menus.map((m) => {
              return (
                <li
                  key={m.id}
                  className="relative text-[#3d4152] text-md font-medium"
                >
                  <NavLink
                    to={m.path}
                    className={({ isActive }) =>
                      `block relative pl-5 cursor-pointer transition-all duration-300 hover:text-[#ff5200] ${
                        m.path === "/cart" ? "pl-5" : ""
                      } ${isActive ? "text-[#ff5200]" : "dark:text-gray-400"}`
                    }
                  >
                    <span className="py-3 flex items-center gap-2 text-nowrap">
                      {m.icon || ""}
                      {m.name}
                      {m.isNew && (
                        <span className="absolute text-[#ff5200] text-[10px] uppercase right-0 top-0">
                          New
                        </span>
                      )}
                    </span>
                    {m.path === "/cart" && (
                      <span className="absolute top-[50%] -translate-y-[50%] left-0 flex justify-center items-center h-4 w-4 rounded-sm bg-[#ff5200] text-white text-center text-[12px]">
                        {cart.length}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
