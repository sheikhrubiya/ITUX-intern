import React from "react";
import Logo from "../assets/logo.jpg";
import { FaFacebook, FaFacebookF, FaInstagram, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="container py-0 bg-[#F4F4F4] mt-20">
        <div className="flex flex-row gap-10 w-full px-5 bg-[#E8E8E8]">
          <div className="w-2/5 py-5">
            <h1 className="uppercase text-md font-medium">Stay in the know</h1>
            <p className="text-sm font-normal">Be the first to find out about trending styles, new releases and sales.</p>
          </div>
          <div className="w-2/5 py-5">
            <input type="text" placeholder="" className="w-60 h-8 border-2 border-black rounded-md"/>
            <button className="w-10 bg-black text-white h-8 -ml-5 rounded-e-md">Join</button>
          </div>
          <div className="flex flex-row gap-6 text-lg py-5">
           <p>#WoodsCraft</p>
           <div className="flex flex-row gap-6 text-lg py-2">
           <span><FaFacebook/></span>
           <span><FaTwitter/></span>
           <span><FaInstagram/></span>
           <span><FaPinterest/></span>
           </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#F4F4F4]">
          {/* company info */}
          <div className="space-y-2 font-semibold">
            <h1>Shop Our Catalog</h1>
            <img src="" alt="catalog"/>
          </div>
          {/* footer link */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2 ">
              <h1 className="text-xl font-semibold">About Us</h1>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designers</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <h1 className="text-xl font-semibold">Contact Us</h1>
              <ul className="text-base font-semibold space-y-1">
                <li className="flex gap-5">
                  <span>
                    <FaPhone />
                  </span>
                  <a href="#">+1 504 235476</a>
                </li>
                <li className="flex gap-5">
                  <span>
                    <FaMessage />
                  </span>
                  <a href="mailto:contact.furnitures.com">
                    support@furnitues.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* bootm section */}
      <p className="text-center text-sm font-semibol mt-0 border-t-2 pt-3 bg-[#F4F4F4]">
        2024 TCJ. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
