import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/features/cartSlice";
import { RESTAURANT_MENU_IMG_CDN } from "../utils/constants";
import { IoMdRadioButtonOn } from "react-icons/io";
import emptyCartImg from "../../public/empty_cart.avif";
import { MdOutlineHotelClass, MdStars } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <section className="py-20 max-lg:py-10">
      <div className="max-w-screen-lg w-full mx-auto">
        <h4 className="text-center font-medium text-gray-500 text-md uppercase">
          <span className="flex items-center justify-center gap-1 font-bold text-black text-2xl mb-20">
            <MdOutlineHotelClass />
            Cart
            <MdOutlineHotelClass />
          </span>
        </h4>
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
              return (
                <>
                  {index !== 0 && (
                    <div className="my-7 border-b-[1px] border-b-gray-200"></div>
                  )}
                  <div className="flex justify-between" key={id}>
                    <div className="w-10/12 pr-5">
                      <IoMdRadioButtonOn
                        className={
                          itemAttribute?.vegClassifier === "VEG"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      />
                      <h5 className="text-lg text-black font-bold">
                        {name}
                      </h5>
                      {
                        <p className="font-medium">
                          {price || "₹" + defaultPrice / 100}
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
                          <span>
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
                        className="absolute bottom-0 left-[50%] w-9/12 translate-x-[-50%] rounded-md bg-white shadow-md font-bold text-lg uppercase text-red-500 py-2 transition-all duration-200 hover:bg-gray-100 hover:shadow-none"
                        onClick={() => dispatch(removeItem(id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            <button
              className="block mx-auto mt-10 bg-[#ff5200] text-white py-3 px-4 rounded-md cursor-pointer transition-all duration-300 hover:opacity-70"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <img
                src={emptyCartImg}
                className="max-w-80 w-full mx-auto animate-bounce mb-2"
              />
              <div className="mb-4">
                <h3 className="text-center text-xl font-semibold text-black">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 text-sm">
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