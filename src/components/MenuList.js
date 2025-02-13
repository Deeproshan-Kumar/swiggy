import React from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { RESTAURANT_MENU_IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/features/cartSlice";

const MenuList = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {items.map((item, index) => {
        const {
          id,
          name,
          price,
          defaultPrice,
          description,
          ratings,
          itemAttribute,
          imageId,
        } = item?.card?.info;

        return (
          <div key={id}>
            <div className="my-7"></div>
            <div className="flex justify-between">
              <div className="w-10/12 pr-5">
                <IoMdRadioButtonOn
                  className={
                    itemAttribute?.vegClassifier === "VEG"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                />
                <h5 className="text-lg text-black font-bold dark:text-white">
                  {name}
                </h5>
                {
                  <p className="font-medium dark:text-gray-400">
                    {"₹" + price / 100 || "₹" + defaultPrice / 100}
                  </p>
                }
                <p>
                  {ratings?.aggregatedRating?.rating && (
                    <span className="text-[#1ba672] flex items-center gap-1">
                      <MdStars className="text-[green]" />
                      {ratings?.aggregatedRating?.rating}
                    </span>
                  )}

                  {ratings?.aggregatedRating?.ratingCount && (
                    <span className="dark:text-gray-200">
                      {" ("}
                      {ratings?.aggregatedRating?.ratingCount ||
                        ratings?.aggregatedRating?.ratingCountV2}
                      {")"}
                    </span>
                  )}
                </p>
                <p className="font-md text-gray-500">{description}</p>
              </div>
              <div className="relative w-2/12">
                {imageId && (
                  <img
                    src={RESTAURANT_MENU_IMG_CDN + imageId}
                    alt={name || "Menu Item Image"}
                    className="rounded-lg"
                  />
                )}
                <button
                  className="absolute bottom-0 left-[50%] w-9/12 translate-x-[-50%] rounded-md bg-white shadow-md font-bold text-lg uppercase text-[#1ba672] py-2 transition-all duration-200 hover:bg-gray-100 hover:shadow-none dark:bg-[#1ba672] dark:text-white dark:hover:text-[#1ba672]"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="border-t-[1px] border-t-gray-200 my-7 dark:border-t-gray-700"></div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
