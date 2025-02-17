import React from "react";
import AboutImage from "../../public/about.avif";
import AppDownloadImage from "../../public/app_download.avif";
import List from "../components/List";

const Offers = () => {
  return (
    <>
      <section className="py-4">
        <div className="container mx-auto">
          <div className="min-h-10"></div>
          <div className="mb-10">
            <img src={AboutImage} alt="About" className="w-full" />
          </div>
          <h1 className="text-2xl text-zinc-800 font-extrabold mb-4 dark:text-gray-200">
            Get the Best Offers on Food from Top Restaurants Near You
          </h1>
          <p className="text-gray-600 mb-2 dark:text-gray-400">
            Get ready for a delicious adventure packed with unbeatable dining
            offers at your favorite restaurants. Whether you’re craving a cheesy
            pizza, a juicy burger, or a delightful bowl of pasta, now is the
            perfect time to head out and indulge in your favorite meals—while
            saving big!
          </p>
          <p className="text-gray-600 mb-2 dark:text-gray-400">
            All the top-rated restaurants and popular eateries are offering
            enticing deals that are too good to pass up. From
            buy-one-get-one-free offers to irresistible combo meals, there’s
            something for everyone. And with a wide variety of restaurant deals
            near you, enjoying a delectable dining experience has never been
            more affordable.
          </p>
          <p className="text-gray-600 mb-2 dark:text-gray-400">
            Picture yourself dining out and savoring a juicy burger with crispy
            fries, or sharing an oven-fresh pizza topped with all your
            favorites—all at a fraction of the price. These incredible
            restaurant offers ensure that you can enjoy delicious meals without
            worrying about the cost. Whether you’re looking for a casual bite or
            a special night out, these dining deals make it easy to experience
            the best without breaking the bank.
          </p>
          <p className="text-gray-600 mb-2 dark:text-gray-400">
            Planning a night out with friends, a family dinner, or a date night?
            Take advantage of these fantastic restaurant offers and make every
            dining experience unforgettable. With top-notch food at unbeatable
            prices, you can treat yourself and your loved ones to a feast
            without stretching your budget. Plus, you’ll be supporting local
            restaurants while enjoying a cost-effective meal out.
          </p>
          <p className="text-gray-600 mb-2 dark:text-gray-400">
            Don’t miss the chance to explore new dining spots and revisit old
            favorites—all while enjoying amazing discounts. Let your taste buds
            rejoice as you discover incredible dishes at unbeatable prices. With
            Swiggy’s restaurant deals, dining out is more affordable than ever,
            turning every meal into a celebration. So why wait? Embrace the joy
            of dining well and saving more today!
          </p>
        </div>
      </section>

      <img src={AppDownloadImage} alt="Download Swiggy" />

      <section className="py-4">
        <div className="container mx-auto">
          <h2 className="text-2xl text-zinc-800 font-extrabold mb-4 dark:text-gray-200">
            Restaurant Chains Near Me
          </h2>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <List
              link="https://www.swiggy.com/cakezone-near-me"
              text="Cake Zone"
            />
            <List
              link="https://www.swiggy.com/gourmet-ice-cream-cakes-by-baskin-robbins-near-me"
              text="Gourmet Ice Cream Cakes by Baskin Robbins"
            />
            <List
              link="https://www.swiggy.com/the-good-bowl-near-me"
              text="The Good Bowl"
            />
            <List
              link="https://www.swiggy.com/kouzina-kafe-the-food-court-near-me"
              text="Kouzina Kafe - The Food Court"
            />
            <List
              link="https://www.swiggy.com/keventers-ice-cream-near-me"
              text="Keventers Ice Cream"
            />
            <List
              link="https://www.swiggy.com/bk-cafe-near-me"
              text="BK Cafe"
            />
            <List
              link="https://www.swiggy.com/taco-bell-near-me"
              text="Taco Bell"
            />
            <List
              link="https://www.swiggy.com/the-dessert-heaven-pure-veg-near-me"
              text="The Dessert Heaven - Pure Veg"
            />
            <List
              link="https://www.swiggy.com/chinese-wok-near-me"
              text="Chinese Work"
            />
            <List
              link="https://www.swiggy.com/itc-fabelle-chocolates-near-me"
              text="ITC Fabelle Chocolates"
            />
            <List
              link="https://www.swiggy.com/indiana-burgers-near-me"
              text="Indiana Burgers"
            />
            <List
              link="https://www.swiggy.com/itc-fabelle-chocolates-near-me"
              text="ITC Fabelle Chocolates"
            />
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto">
          <h2 className="text-2xl text-zinc-800 font-extrabold mb-4 dark:text-gray-200">
            Explore Every Restaurants Near Me
          </h2>
          <div className="grid grid-cols-4 gap-x-4 gap-y-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <List
              link="https://www.swiggy.com/restaurants-near-me"
              text="Explore Restaurants Near Me"
            />
            <List
              link="https://www.swiggy.com/veg-restaurants-near-me"
              text="Veg Restaurants Near Me"
            />
            <List
              link="https://www.swiggy.com/non-veg-restaurants-near-me"
              text="Non Veg Restaurants Near Me"
            />
          </div>
        </div>
        <div className="min-h-10"></div>
      </section>
    </>
  );
};

export default Offers;