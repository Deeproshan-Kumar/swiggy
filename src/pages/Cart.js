import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/features/cartSlice";
import { RESTAURANT_MENU_IMG_CDN } from "../utils/constants";
import swiggyLogo from "../../public/swiggy.svg";
import emptyCartImg from "../../public/empty_cart.avif";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdOutlineHotelClass, MdStars } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = item?.card?.info?.price || item?.card?.info?.defaultPrice;
    return total + itemPrice / 100;
  }, 0);

  return (
    <section className="py-20 max-lg:py-10">
      <div className="max-w-screen-lg w-full mx-auto">
        <h1>
          <span className="flex items-center justify-center gap-1 font-bold text-black text-2xl mb-20 dark:text-white">
            <MdOutlineHotelClass />
            Cart
            <MdOutlineHotelClass />
          </span>
        </h1>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => {
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

              const validPrice =
                price && !isNaN(price) ? price / 100 : defaultPrice / 100;

              return (
                <>
                  <div className="flex justify-between" key={id}>
                    <div className="w-10/12 pr-5">
                      <IoMdRadioButtonOn
                        className={
                          itemAttribute?.vegClassifier === "VEG"
                            ? "text-[#1ba672]"
                            : "text-red-600"
                        }
                      />
                      <h5 className="text-lg text-black font-bold dark:text-white">
                        {name}
                      </h5>

                      <p className="font-medium dark:text-gray-400 mb-1">
                        {validPrice !== 0
                          ? "₹" + validPrice
                          : "Price unavailable"}
                      </p>

                      <p>
                        {ratings?.aggregatedRating?.rating && (
                          <span className="text-[#1ba672] flex items-center gap-1">
                            <MdStars className="text-[#1ba672]" />
                            {ratings?.aggregatedRating?.rating}
                          </span>
                        )}

                        {ratings?.aggregatedRating?.ratingCount && (
                          <span className="dark:text-gray-300">
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
                          height={100}
                        />
                      )}
                      <button
                        className="absolute -bottom-2 left-[50%] w-9/12 translate-x-[-50%] rounded-md bg-white shadow-md font-bold text-lg uppercase text-red-500 py-2 transition-all duration-200 hover:bg-gray-100 hover:shadow-none"
                        onClick={() => dispatch(removeItem(id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="my-7 border-b-[1px] border-b-gray-200 dark:border-b-gray-500"></div>
                </>
              );
            })}
            <button
              className="block mb-7 mr-0 ml-auto bg-[#ff5200] text-white py-3 px-4 rounded-md cursor-pointer transition-all duration-300 hover:opacity-70"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            <div className="p-5 border rounded-lg border-gray-200 dark:border-gray-500">
              <img src={swiggyLogo} alt="Logo" className="mb-2" />
              <p className="text-md dark:text-gray-300">Your total price is</p>
              <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">
                To pay: {"₹" + totalPrice}
              </h2>
              <div className="flex justify-between items-center">
                <button className="block bg-[#ff5200] text-white py-3 px-4 rounded-md cursor-pointer transition-all duration-300 hover:opacity-70">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <img
                src={emptyCartImg}
                className="max-w-80 w-full mx-auto animate-bounce mb-2"
                height={320}
              />
              <div className="mb-4">
                <h3 className="text-center text-xl font-semibold text-black mb-2 dark:text-white">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  You can go to home page to view more restaurants
                </p>
              </div>
              <Link
                to="/"
                className="inline-block bg-[#ff5200] text-white py-3 px-4 rounded-md cursor-pointer transition-all duration-300 hover:opacity-70"
              >
                See Restaurants Near You
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
