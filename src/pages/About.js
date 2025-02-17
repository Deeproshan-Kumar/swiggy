import React from "react";

const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            About Us
          </h3>
          <p className="text-gray-700 text-md dark:text-gray-500">
            Welcome to Swiggy, your go-to platform for fast, reliable, and
            delicious food delivery right to your doorstep! Whether you're
            craving a quick snack, a hearty meal, or something from your
            favorite restaurant, we’re here to make your dining experience easy,
            convenient, and satisfying.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700 text-md dark:text-gray-500">
            At Swiggy, we believe that food should bring people together — no
            matter where you are or what you're craving. Our mission is to offer
            a wide selection of food choices with unmatched convenience and
            speed. From local favorites to international cuisines, we partner
            with top restaurants and eateries to provide you with the best
            options at the click of a button.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            Why Choose Us?
          </h3>
          <ul className="list-none">
            <li className="text-gray-700 text-md dark:text-gray-500 mb-2">
              <strong>Variety:</strong> Explore a wide array of food options,
              from local dishes to gourmet meals, all in one place.
            </li>
            <li className="text-gray-700 text-md dark:text-gray-500 mb-2">
              <strong>Fast Delivery:</strong> We know you're hungry, and we're
              committed to getting your food to you as quickly as possible.
            </li>
            <li className="text-gray-700 text-md dark:text-gray-500 mb-2">
              <strong>Easy Ordering:</strong> With our user-friendly app and
              website, ordering your favorite meals has never been simpler.
            </li>
            <li className="text-gray-700 text-md dark:text-gray-500 mb-2">
              <strong>Reliable Service:</strong> We take pride in ensuring that
              every order is delivered with care and precision.
            </li>
            <li className="text-gray-700 text-md dark:text-gray-500">
              <strong>Customer-Centric Approach:</strong> Your satisfaction is
              our priority. Our dedicated support team is always ready to assist
              you with any queries or concerns.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700 text-md dark:text-gray-500">
            Our vision is to redefine the way people experience food delivery.
            We aim to become the preferred choice for food lovers by
            continuously improving our services, expanding our partnerships, and
            enhancing customer satisfaction. With a focus on quality,
            convenience, and sustainability, we strive to make every meal an
            unforgettable experience.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            Join us on our journey
          </h3>
          <p className="text-gray-700 text-md dark:text-gray-500">
            Thank you for choosing Swiggy. We’re excited to serve you and bring
            the best of the food world to your table. Stay tuned as we continue
            to innovate and grow!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
