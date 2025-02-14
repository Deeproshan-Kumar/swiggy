import React from "react";
import SwiggyImage from "../../../public/swiggy.svg";
import PlayStoreImg from "../../../public/play_store.avif";
import AppStoreImg from "../../../public/app_store.avif";

import { IoLogoLinkedin as Linkedin } from "react-icons/io5";
import { FaInstagram as Instagram } from "react-icons/fa";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaPinterest as Pinterest } from "react-icons/fa";
import { FaTwitter as Twitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 border-t-[1px] border-t-gray-400 py-7 dark:bg-black dark:border-t-gray-600">
      <div className="container mx-auto ">
        <div className="flex items-center justify-center gap-5 max-md:flex-wrap max-md:gap-3">
          <h2 className="text-2xl font-bold text-black max-md:text-center dark:text-white">
            For better experience,download the Swiggy app now
          </h2>
          <div className="flex items-center gap-5 max-lg:gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
              target="_blank"
            >
              <img src={PlayStoreImg} alt="Play Store" className="h-16" />
            </a>
            <a
              href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
              target="_blank"
            >
              <img src={AppStoreImg} alt="App Store" className="h-16" />
            </a>
          </div>
        </div>
        <div className="min-h-10 max-md:min-h-5"></div>
        <div className="grid grid-cols-5 gap-12 max-lg:grid-cols-4 max-lg:gap-10 max-md:grid-cols-2 max-md:gap-7 max-sm:grid-cols-1 max-sm:gap-5">
          <div className="min-w-60">
            <div>
              <img src={SwiggyImage} alt="Swiggy" className="mb-3" />
              <p className="text-md text-gray-600 font-medium dark:text-gray-400">
                © {new Date().getFullYear()} Swiggy Limited
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">Company</h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                About Us
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Swiggy Corporate
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Careers
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Team
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Swiggy One
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Swiggy Instamart
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Swiggy Dineout
              </li>
              <li className="text-md text-gray-600 font-medium transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Swiggy Genie
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              Contact Us
            </h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Help & Support
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Partner with us
              </li>
              <li className="text-md text-gray-600 font-medium transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Ride with us
              </li>
            </ul>

            <div className="min-h-10"></div>

            <h4 className="text-xl font-bold mb-3 dark:text-white">Legal</h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Terms & Conditions
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Cookie Policy
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Privacy Policy
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Investor Relatiions
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              Available in:
            </h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Lucknow
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Gurgaon
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Delhi
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Hyderabad
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Bangalore
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Mmumbai
              </li>
              <li className="text-md text-gray-600 font-medium transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Pune
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              Life at Swiggy
            </h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Explore with Swiggy
              </li>
              <li className="text-md text-gray-600 font-medium mb-3 transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Swiggy News
              </li>
              <li className="text-md text-gray-600 font-medium transition-all duration-300 hover:text-black dark:text-gray-400 dark:hover:text-white">
                Snackables
              </li>
            </ul>
            <div className="min-h-10"></div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              Social Links
            </h4>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/swiggy-in/"
                  target="_blank"
                  className="dark:text-gray-400 dark:hover:text-[#ff5200]"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/swiggyindia/?hl=en"
                  target="_blank"
                  className="dark:text-gray-400 dark:hover:text-[#ff5200]"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/swiggy.in/"
                  target="_blank"
                  className="dark:text-gray-400 dark:hover:text-[#ff5200]"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/swiggyindia/"
                  target="_blank"
                  className="dark:text-gray-400 dark:hover:text-[#ff5200]"
                >
                  <Pinterest />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  className="dark:text-gray-400 dark:hover:text-[#ff5200]"
                >
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
