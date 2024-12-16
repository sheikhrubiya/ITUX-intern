import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({search, setSearch, searchProduct}) => { 

  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/services", label: "Service" },
  ];

  const activeClass = ({ isActive }) =>
    `${isActive ? "text-orange-400" : "hover:text-gray-300"} font-medium`;

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-4 flex justify-between items-center border-b-gray-700 bg-orange-100 border-2 max-w-full"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-11" />
          <span className="text-3xl font-bold text-orange-950">Furniture</span>
        </div>

        {/* Link section */}
        <div className="hidden md:block">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={`${activeClass} mx-4 text-sm font-semibold`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {/* Button section className='' */}
        <button className="primary-btn">Try For Free</button>
      </motion.div>
      <div className="w-full h-16">
        <div className="p-1 flex flex-row items-center justify-between mt-2">
          <div className="ml-80">
            <input
              type="text"
              value={search}
              placeholder="Enter item to search.."
              onChange={(e) => setSearch(e.target.value)}
              className="border-gray-400 border w-80 h-7 rounded-lg p-2"
            />

            <button onClick={searchProduct} className="-ml-7">
              <GoSearch />
            </button>
          </div>
          <div className="flex flex-row gap-10 mr-4">
            <div className="flex flex-col justify-center items-center">
              <button onClick={()=>navigate("/signup")} className="text-2xl">
                <CgProfile />
              </button>
              <p className="text-sm">Profiles</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button onClick={()=>navigate("/wishlist")} className="text-2xl">
                <FaHeart />
              </button>
              <p className="text-sm">WishList</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button onClick={()=>navigate("/cart")} className="text-2xl">
                <IoCartOutline />
              </button>
              <p className="text-sm">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
