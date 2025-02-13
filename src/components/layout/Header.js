import React, { useContext, useEffect } from "react";
import SwiggyImage from "../../../public/swiggy.svg";
import menus from "../../utils/menus";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HiStatusOnline } from "react-icons/hi";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("dark");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "true");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container h-[80px] mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="flex gap-1">
            <img src={SwiggyImage} alt="Swiggy" className="h-auto" />
            {onlineStatus && (
              <HiStatusOnline className="text-[#ff5200]" title={"Online"} />
            )}
          </Link>
        </div>
        <ul className="flex gap-10 max-lg:gap-7 max-md:gap-4">
          {menus &&
            menus.map((m, i) => {
              return (
                <li
                  key={m.id}
                  className="relative text-[#3d4152] text-md font-medium cursor-pointer hover:text-[#ff5200]"
                >
                  <Link to={m.path}>
                    <span className="py-3 flex items-center gap-2 text-nowrap">
                      {m.icon}
                      {m.name}
                      {m.isNew && (
                        <span className="absolute text-[#ff5200] text-[10px] uppercase right-0 top-0">
                          New
                        </span>
                      )}
                    </span>
                    {m.path === "/cart" && (
                      <span className="absolute top-0 left-0 flex justify-center items-center h-4 w-4 rounded-full bg-black text-white text-center text-[12px]">
                        0
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          <button onClick={toggleTheme}>
            {isDarkMode ? <IoMoonSharp /> : <IoSunnySharp />}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
