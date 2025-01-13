import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ search, setSearch, searchProduct }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/collection", label: "Collections" },
    { path: "/new", label: "New" },
    { path: "/furniture", label: "Furniture" },
    { path: "/outdoor", label: "Outdoor" },
    { path: "/inspirations", label: "Inspirations" },
  ];

  return (
    <div className="h-14 w-full flex bg-[#635049] px-5 sm:px-10 md:px-16 items-center justify-between">
      {/* Logo */}
      <div className="w-20 h-20 mr-10">
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="text-white text-3xl">{menuOpen ? "X" : "☰"}</div>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-row relative w-[30%] max-w-[300px]">
        <input
          type="text"
          value={search}
          placeholder="Search here.."
          aria-label="Search products"
          className="border-2 border-gray-300 rounded-lg h-8 w-[200px] p-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearchOutline
          className="text-xl absolute right-28 top-2 cursor-pointer"
          onClick={searchProduct}
          aria-label="Search Icon"
        />
      </div>

      {/* Navbar Links */}
      <nav className={`md:flex ${menuOpen ? "block" : "hidden"} w-full md:w-auto`}>
        <div className="mr-16 flex flex-col md:flex-row justify-between text-white font-normal text-lg gap-4 md:gap-8">
          {navLinks.map((link) => (
            <div key={link.path} className="hover:text-amber-300">
              <NavLink to={link.path}>{link.label}</NavLink>
            </div>
          ))}
        </div>
      </nav>

      {/* Icons Section */}
      <div className="flex flex-row gap-5 text-white font-medium">
        <div
          className="-mt-1 gap-0 flex flex-col hover:cursor-pointer"
          onClick={() => navigate("/wishlist")}
          aria-label="Go to Wishlist"
        >
          <FaHeart className="text-xl" />
          <p className="-ml-2 text-sm">Wishlist</p>
        </div>
        <div
          className="-mt-1 gap-0 flex flex-col hover:cursor-pointer"
          onClick={() => navigate("/login")}
          aria-label="Login"
        >
          <FiLogIn className="text-xl" />
          <p className="-ml-2 text-sm">Login</p>
        </div>
        <div
          className="-mt-1 gap-0 flex flex-col hover:cursor-pointer"
          onClick={() => navigate("/cart")}
          aria-label="Go to Cart"
        >
          <FaShoppingCart className="text-xl" />
          <p className="-ml-2 text-sm">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
