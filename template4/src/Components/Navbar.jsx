import React from "react";
import logo from "../assets/logo4.jpg";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navlinks =[
    {
      path:'/home',
      label:'Home'
    },
    {
      path:'/products',
      label:'Products'
    },
    {
      path:'/about',
      label:'About Us'
    },
    
  ]
  return (
    <div className="bg-[#445394] max-w-screen">
      <div className="h-16 w-full bg-[#445394] flex flex-row px-4">
        <div className="h-full w-5% border-none -ml-4">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="flex-row hidden lg:block w-20%">
          <input className="w-80 h-8 bg-white rounded-3xl mt-3" />
          <FaSearch className="-mt-[30px] text-xl ml-72" />
        </div>
        <div className="w-40% text-white"> 
         {navlinks.map((obj)=>(
         <NavLink to={obj.path}>{obj.label}</NavLink>
         ))}
        </div>
        <div className="text-3xl text-white font-bold flex flex-row gap-4 -ml-4 mt-8 w-10%">
          <IoCartOutline />
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
