import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";

const Navbar = ({search, setSearch, searchProduct}) => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  
  const activeClass = ({ isActive }) => `${isActive ? "text-orange-400 relative after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white" : "hover:text-gray-300"} font-semibold transition-all duration-300 ease-in-out transform hover:scale-105`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
       <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative container mx-auto px-4 py-4 flex flex-wrap justify-between items-center border-b-2 border-gray-700 bg-[#A48269] max-w-full"
    >
      {/* Logo section */}
      <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
        <img src={logo} alt="logo" className="w-11" />
        <span className="text-3xl font-bold text-orange-950">Furniture</span>
        
        {/* Mobile menu toggle */}
        <button 
          className="md:hidden ml-auto text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"

        >
          {isMobileMenuOpen ? <IoCloseOutline/> : <IoMenuOutline/>}
        </button>
      </div>

      {/* Mobile and Desktop Navigation */}
      <div className={`
        w-full md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'} 
        md:block
        absolute md:static 
        left-0 top-full
        bg-orange-100 md:bg-transparent
        border-b md:border-none
        py-4 md:py-0 z-50 shadow-md md:shadow-none transition-all duration-300 ease-in-out
      `}>
        <div className="flex flex-col gap-6 md:flex-row items-center px-4 md:px-0">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={activeClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-auto flex items-center justify-center my-4 md:my-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={search}
            placeholder="Enter item to search.."
            onChange={(e) => setSearch(e.target.value)}
            className="border-gray-400 border w-full md:w-80 h-10 rounded-lg p-2 pr-10"
          />
          <button 
            onClick={searchProduct} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <GoSearch />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row gap-4 md:gap-5 w-full md:w-auto justify-around md:justify-end items-center">
        {[
          { icon: <CgProfile />, label: 'Profile', path: '/profile' },
          { icon: <FaHeart />, label: 'WishList', path: '/wishlist' },
          { icon: <IoCartOutline />, label: 'Cart', path: '/cart' }
        ].map((item) => (
          <div 
            key={item.label} 
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            <button className="text-2xl">
              {item.icon}
            </button>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
    </>
  );
};

export default Navbar;
