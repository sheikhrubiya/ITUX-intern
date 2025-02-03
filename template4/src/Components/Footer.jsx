import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#445394] text-white px-20 py-10 gap-2 mt-40">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <h3 className="font-semibold">Quick Links</h3>
          <ul>
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            
          </ul>
        </div>
        <div>
          <ul>
          <li>
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/returns-exchanges">Returns & Exchanges</NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h3 className="font-semibold">Customer Support</h3>
          <ul>
            <li>
              Email:{" "}
              <NavLink to="mailto:support@furniturewebsite.com">
                support@furniturewebsite.com
              </NavLink>
            </li>
            <li>
              Phone: <NavLink to="tel:+11234567890">(123) 456-7890</NavLink>
            </li>
            <li>
              <NavLink to="/live-chat">Live Chat</NavLink>
            </li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h3 className="font-semibold">Follow Us</h3>
          <ul class="social-links">
            <li>
              <NavLink to="https://facebook.com" target="_blank">
                Facebook
              </NavLink>
            </li>
            <li>
              <NavLink to="https://instagram.com" target="_blank">
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink to="https://pinterest.com" target="_blank">
                Pinterest
              </NavLink>
            </li>
            <li>
              <NavLink to="https://twitter.com" target="_blank">
                Twitter
              </NavLink>
            </li>
          </ul>
        </div>

        
      </div>

      <div class="text-center border-t-2 border-gray-500">
        <p>© 2025 Furniture Website | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
