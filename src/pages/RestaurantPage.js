import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_INFO } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import GenericImg from "../../public/generic.png";
import { MdStars } from "react-icons/md";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useRestaurantMenu from "../hooks/useReastaurantMenu";
import RestaurantMenu from "../components/RestaurantMenu";

const Restaurant = () => {
  const { id } = useParams();
  const restaurantMenu = useRestaurantMenu(id);
  if (restaurantMenu == null) return "Loading...";
  const { name, costForTwoMessage, avgRating, totalRatingsString, cuisines } =
    restaurantMenu[2]?.card?.card?.info;
  const categories =
    restaurantMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) =>
      cat?.card?.card?.["@type"].includes("v2.ItemCategory")
    );
  return (
    <section>
      <div className="max-w-screen-lg w-full mx-auto py-8">
        <h2 className="text-2xl font-bold text-black mb-4">{name}</h2>
        <div className="border border-gray-300 rounded-lg mb-10 p-4">
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-lg">
              {avgRating && (
                <span className="flex items-center gap-1">
                  <MdStars className="text-[green] text-lg" /> {avgRating}(
                  {totalRatingsString})
                </span>
              )}
            </h4>
            •<h4 className="font-bold text-lg">{costForTwoMessage}</h4>
          </div>
          <p className="text-orange-400 underline font-bold">
            {cuisines.join("")}
          </p>
        </div>

        <div className="bg-gray-200">
          {categories.map((category) => {
            return (
              <RestaurantMenu
                key={category?.title}
                data={category?.card?.card}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
