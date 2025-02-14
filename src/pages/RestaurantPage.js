import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdStars } from "react-icons/md";
import { MdOutlineHotelClass } from "react-icons/md";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useRestaurantMenu from "../hooks/useReastaurantMenu";
import RestaurantMenu from "../components/RestaurantMenu";
import RestaurantMenuShimmer from "../shimmers/RestaurantMenuShimmer";

const Restaurant = () => {
  const { id } = useParams();
  const restaurantMenu = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(0);
  if (restaurantMenu == null) return <RestaurantMenuShimmer />;
  const { name, costForTwoMessage, avgRating, totalRatingsString, cuisines } =
    restaurantMenu[2]?.card?.card?.info;
  const { offers } = restaurantMenu[3]?.card?.card?.gridElements?.infoWithStyle;
  const categories =
    restaurantMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) =>
      cat?.card?.card?.["@type"].includes("v2.ItemCategory")
    );
  return (
    <section>
      <div className="max-w-screen-lg w-full mx-auto py-20 max-lg:py-10">
        <h2 className="text-2xl font-bold text-black mb-4 dark:text-white">{name}</h2>
        <div className="border border-gray-300 rounded-lg mb-10 p-4 dark:border-gray-500">
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-lg dark:text-gray-200">
              {avgRating && (
                <span className="flex items-center gap-1">
                  <MdStars className="text-[green] text-lg" /> {avgRating}(
                  {totalRatingsString})
                </span>
              )}
            </h4>
            •<h4 className="font-bold text-lg dark:text-gray-400">{costForTwoMessage}</h4>
          </div>
          <p className="text-orange-400 underline font-bold">
            {cuisines.join("")}
          </p>
        </div>

        {offers && (
          <div className="mb-10">
            <h2 className="font-bold text-lg mb-2">Deals for you</h2>
            <Swiper
              spaceBetween={20}
              slidesPerView={2.2}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2.2,
                },
              }}
            >
              {offers.map((offer, index) => {
                const { header, offerLogo, primaryDescription } = offer?.info;
                return (
                  <SwiperSlide key={index}>
                    <div className="flex items-center gap-2 rounded-2xl border border-gray-300 p-3 dark:border-gray-500">
                      <div>
                        <img
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" +
                            offerLogo
                          }
                          className="h-12"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold dark:text-white">{header}</h4>
                        <h5 className="font-bold text-gray-500">
                          {primaryDescription}
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}

        <div>
          <h4 className="text-center font-medium text-gray-500 text-md uppercase">
            <span className="flex items-center justify-center gap-1 dark:text-white">
              <MdOutlineHotelClass />
              Menu
              <MdOutlineHotelClass />
            </span>
          </h4>
          {categories.map((category, index) => {
            return (
              <RestaurantMenu
                key={index}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
