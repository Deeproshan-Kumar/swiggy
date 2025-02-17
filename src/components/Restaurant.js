import React from "react";
import { MdStars } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Restaurant = ({
  image,
  discount,
  name,
  avgRating,
  deliveryTime,
  cuisines,
  areaName,
}) => {
  return (
    <article className="snap-center">
      <div>
        <div className='relative h-[180px] w-full rounded-2xl shadow-lg overflow-hidden before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-[rgba(0,0,0,0.7)] before:to-transparent'>
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <h4 className="absolute w-full bottom-2 left-[50%] -translate-x-[50%] text-xl text-white text-center font-extrabold uppercase">
            {discount}
          </h4>
        </div>
        <div className="p-4">
          <h3 className="text-black font-bold text-xl text-ellipsis overflow-hidden whitespace-nowrap dark:text-gray-300">
            {name}
          </h3>
          <p className="flex items-center gap-1 font-medium text-black dark:text-gray-500">
            <MdStars className="text-[green] text-lg" />
            {avgRating + " • "}
            {deliveryTime}
          </p>
          <p className="text-md text-zinc-700 leading-tight dark:text-gray-500">
            {cuisines.join(", ")}
          </p>
          <p className="flex items-center gap-1 text-md text-zinc-700 dark:text-gray-500">
            <IoLocationSharp className="text-[#ff5200]" />
            {areaName}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Restaurant;
