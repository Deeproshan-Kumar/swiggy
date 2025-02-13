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
    <footer className="bg-zinc-100 border-t-[1px] border-t-gray-400 py-7">
      <div className="container mx-auto ">
        <div className="flex items-center justify-center gap-5 max-md:flex-wrap max-md:gap-3">
          <h2 className="text-2xl font-bold text-gray-700 max-md:text-center">
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
              <p className="text-md text-gray-600 font-medium">
                © {new Date().getFullYear()} Swiggy Limited
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">Company</h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3">
                About Us
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Swiggy Corporate
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Careers
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">Team</li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Swiggy One
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Swiggy Instamart
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Swiggy Dineout
              </li>
              <li className="text-md text-gray-600 font-medium">
                Swiggy Genie
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">Contact Us</h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3">
                Help & Support
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Partner with us
              </li>
              <li className="text-md text-gray-600 font-medium">
                Ride with us
              </li>
            </ul>

            <div className="min-h-10"></div>

            <h4 className="text-xl font-bold mb-3">Legal</h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3">
                Terms & Conditions
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Cookie Policy
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Privacy Policy
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Investor Relatiions
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">Available in:</h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3">
                Lucknow
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Gurgaon
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">Delhi</li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Hyderabad
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Bangalore
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Mmumbai
              </li>
              <li className="text-md text-gray-600 font-medium">Pune</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">Life at Swiggy</h4>
            <ul>
              <li className="text-md text-gray-600 font-medium mb-3">
                Explore with Swiggy
              </li>
              <li className="text-md text-gray-600 font-medium mb-3">
                Swiggy News
              </li>
              <li className="text-md text-gray-600 font-medium">Snackables</li>
            </ul>
            <div className="min-h-10"></div>
            <h4 className="text-xl font-bold mb-3">Social Links</h4>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/swiggy-in/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/swiggyindia/?hl=en"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/swiggy.in/" target="_blank">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/swiggyindia/" target="_blank">
                  <Pinterest />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
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
