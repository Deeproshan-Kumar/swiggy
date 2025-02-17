import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Categories,
  Restaurant,
  Search,
  List,
  FilterButton,
  ResetButton,
} from "../components";
import {
  SWIGGY_API,
  CAT_IMG_CDN,
  RESTAURANT_IMG_CDN,
} from "../utils/constants";
import { RiResetLeftFill } from "react-icons/ri";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import HomepageShimmer from "../shimmers/HomepageShimmer";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // Fetching Swiggy API
  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const restaurants = data?.data?.cards?.filter(
        (card) => card?.card?.card?.id === "restaurant_grid_listing"
      )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setCards(data?.data?.cards);
        setFilteredRestaurants(restaurants);
        setAllRestaurants(restaurants);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Search Restaurants
  const searchRestaurants = (restaurants) => {
    return restaurants.filter((restaurant) => {
      const name = restaurant?.info?.name?.toLowerCase() || "";
      return name.includes(searchQuery.toLowerCase());
    });
  };

  // Filters
  const filterRestaurants = (filterType) => {
    let filteredRestaurants = cards.filter(
      (card) => card?.card?.card?.id === "restaurant_grid_listing"
    )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (!filteredRestaurants) {
      console.log("No restaurants found.");
      return;
    }

    if (filterType === "fastDelivery") {
      filteredRestaurants = filteredRestaurants.filter((restaurant) => {
        const deliveryTime = restaurant?.info?.sla?.slaString;
        return deliveryTime && parseInt(deliveryTime.split("-")[0]) < 30;
      });
      setActiveFilter("fastDelivery");
    }

    if (filterType === "ratings") {
      filteredRestaurants = filteredRestaurants.filter(
        (restaurant) => restaurant?.info?.avgRating >= 4.0
      );
      setActiveFilter("ratings");
    }

    if (filterType === "offers") {
      filteredRestaurants = filteredRestaurants.filter(
        (restaurant) =>
          restaurant?.info?.aggregatedDiscountInfoV3?.header !== ""
      );
      setActiveFilter("offers");
    }

    if (filterType === "priceRange") {
      filteredRestaurants = filteredRestaurants.filter(
        (restaurant) =>
          restaurant?.info?.costForTwo.split(" ")[0].replace("₹", "") >= 300 &&
          restaurant?.info?.costForTwo.split(" ")[0].replace("₹", "") <= 600
      );
      setActiveFilter("priceRange");
    }

    if (filterType === "lessThan300") {
      filteredRestaurants = filteredRestaurants.filter(
        (restaurant) =>
          restaurant?.info?.costForTwo.split(" ")[0].replace("₹", "") < 300
      );
      setActiveFilter("lessThan300");
    }
    setFilteredRestaurants(filteredRestaurants);
  };

  // Clear Filter
  const clearFilter = () => {
    setSearchQuery("");
    setFilteredRestaurants(allRestaurants);
    setActiveFilter("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (cards.length === 0) {
    return <HomepageShimmer />;
  }

  return (
    <>
      {cards.map((card, index) => {
        return (
          <div key={index} className="container mx-auto">
            {/* What's on your mind? */}
            {card?.card?.card?.id === "whats_on_your_mind" && (
              <section id={card?.card?.card?.id} className="py-4">
                <h2 className="text-2xl text-zinc-800 font-extrabold mb-4 dark:text-gray-200">
                  {card?.card?.card?.header?.title}
                </h2>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={10}
                  breakpoints={{
                    320: {
                      slidesPerView: 4,
                    },
                    640: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 5,
                    },
                    991: {
                      slidesPerView: 6,
                    },
                    1024: {
                      slidesPerView: 7,
                    },
                    1200: {
                      slidesPerView: 8,
                    },
                    1400: {
                      slidesPerView: 10,
                    },
                  }}
                >
                  {card?.card?.card?.imageGridCards?.info.length > 0 &&
                    card?.card?.card?.imageGridCards?.info.map((item) => {
                      const { id, action, imageId } = item;
                      return (
                        <SwiperSlide key={id}>
                          <Categories
                            link={action?.link}
                            imageId={CAT_IMG_CDN + imageId}
                            text={action?.text}
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </section>
            )}

            {/* Top brands for you */}
            {card?.card?.card?.id === "top_brands_for_you" && (
              <section id={card?.card?.card?.id} className="py-4">
                <h2 className="text-2xl text-zinc-800 font-extrabold mb-4 dark:text-gray-200">
                  {card?.card?.card?.header?.title}
                </h2>
                <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1 max-sm:gap-2">
                  {card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    .length > 0 &&
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
                      (restaurant, index) => {
                        const {
                          id,
                          cloudinaryImageId,
                          aggregatedDiscountInfoV3,
                          name,
                          avgRating,
                          avgRatingString,
                          sla,
                          cuisines,
                          areaName,
                        } = restaurant?.info;
                        return (
                          <Link
                            to={`/restaurant/${id}`}
                            key={id}
                            className="block border border-gray-200 rounded-2xl transition-all duration-300 hover:scale-95 dark:border-gray-800"
                          >
                            <Restaurant
                              image={RESTAURANT_IMG_CDN + cloudinaryImageId}
                              discount={`${
                                aggregatedDiscountInfoV3?.header || ""
                              } ${aggregatedDiscountInfoV3?.subHeader || ""}`}
                              name={name}
                              avgRating={avgRating || avgRatingString}
                              deliveryTime={sla?.slaString}
                              cuisines={cuisines}
                              areaName={areaName}
                            />
                          </Link>
                        );
                      }
                    )}
                </div>
              </section>
            )}

            {/* popular_restaurants_title */}
            {card?.card?.card?.id === "popular_restaurants_title" && (
              <section id={card?.card?.card?.id} className="pt-4">
                <h2 className="text-2xl text-zinc-800 font-extrabold mb-4 dark:text-gray-200">
                  {card?.card?.card?.title}
                </h2>
              </section>
            )}

            {/* Filters */}
            {card?.card?.card?.["@type"].includes(
              "InlineViewFilterSortWidget"
            ) && (
              <div className="relative flex flex-wrap gap-4 mb-4">
                {/* Filters */}
                <FilterButton
                  onClick={() => filterRestaurants("fastDelivery")}
                  label={"Fast Delivery"}
                  isActive={activeFilter === "fastDelivery"}
                />
                <FilterButton
                  onClick={() => filterRestaurants("ratings")}
                  label={"Ratings 4.0"}
                  isActive={activeFilter === "ratings"}
                />
                <FilterButton
                  onClick={() => filterRestaurants("offers")}
                  label={"Offers"}
                  isActive={activeFilter === "offers"}
                />
                <FilterButton
                  onClick={() => filterRestaurants("priceRange")}
                  label={"Rs. 300 - Rs. 600"}
                  isActive={activeFilter === "priceRange"}
                />
                <FilterButton
                  onClick={() => filterRestaurants("lessThan300")}
                  label={"Less than Rs. 300"}
                  isActive={activeFilter === "lessThan300"}
                />
                <ResetButton
                  onClick={clearFilter}
                  label={<RiResetLeftFill />}
                />
                {/* Search */}
                <Search
                  type={"search"}
                  value={searchQuery}
                  placeholder="Search for restaurant and food"
                  onChange={handleSearch}
                  className="min-w-64 border border-black-600 rounded-full p-2 px-3 outline-none dark:border-gray-500 focus:border-black dark:bg-black dark:focus:border-white dark:text-gray-200"
                />
              </div>
            )}

            {/* Restaurants grid listing */}
            {card?.card?.card?.id === "restaurant_grid_listing" && (
              <section id={card?.card?.card?.id} className="py-4">
                <div className="relative min-h-80 grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1 max-sm:gap-2">
                  {searchRestaurants(filteredRestaurants).length > 0 ? (
                    searchRestaurants(filteredRestaurants).map((restaurant) => {
                      const {
                        id,
                        cloudinaryImageId,
                        aggregatedDiscountInfoV3,
                        name,
                        avgRating,
                        avgRatingString,
                        sla,
                        cuisines,
                        areaName,
                      } = restaurant?.info;
                      return (
                        <Link
                          to={`/restaurant/${id}`}
                          key={id}
                          className="block border border-gray-200 rounded-2xl transition-all duration-300 hover:scale-95 dark:border-gray-800"
                        >
                          <Restaurant
                            image={RESTAURANT_IMG_CDN + cloudinaryImageId}
                            discount={`${
                              aggregatedDiscountInfoV3?.header || ""
                            } ${aggregatedDiscountInfoV3?.subHeader || ""}`}
                            name={name}
                            avgRating={avgRating || avgRatingString}
                            deliveryTime={sla?.slaString}
                            cuisines={cuisines}
                            areaName={areaName}
                          />
                        </Link>
                      );
                    })
                  ) : (
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full flex items-center justify-center pointer-events-none">
                      <p className="text-center dark: text-gray-200">
                        No restaurants found!
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Restaurants near me links */}
            {card?.card?.card?.id === "restaurant_near_me_links" && (
              <section id={card?.card?.card?.id} className="py-4">
                <h2 className="text-2xl text-zinc-800 font-extrabold mb-4 dark:text-gray-200">
                  {card?.card?.card?.title}
                </h2>
                <ul className="grid grid-cols-4 gap-x-4 gap-y-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                  {card?.card?.card?.brands.length > 0 &&
                    card?.card?.card?.brands.map((brand, index) => {
                      return (
                        <List
                          key={index}
                          link={brand?.link}
                          text={brand?.text}
                        />
                      );
                    })}
                </ul>
              </section>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Home;
