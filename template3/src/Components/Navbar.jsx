import React, { useEffect, useState } from "react";
import logo from "../assets/logo3.jpg";
import {
  FaCross,
  FaHeart,
  FaPhone,
  FaRegHeart,
  FaSearch,
} from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import Modal from "./Modal";
import { RiCloseCircleLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiDiscount1, CiWallet } from "react-icons/ci";
import { MdLogout, MdWindow } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { TbBrandBlogger } from "react-icons/tb";
import { div } from "framer-motion/client";
import Home from "../Pages/Home";
const Navbar = ({ search, setSearch, searchProduct }) => {
  const [bedOpen, setBedClose] = useState(false);
  const [livingOpen, setLivingClose] = useState(false);
  const [isClosed, setClosed] = useState(true);

  const handleBed = () => {
    setBedClose(!bedOpen);
  };
  const handleHome = () => {
    <Home />;
  };
  const handleMouseEnter = () => {
    setBedClose(true);
  };
  const handleMouseLeave = () => {
    setBedClose(false);
  };
  const handleLiving = () => {
    setLivingClose(!livingOpen);
  };
  const handleSideBar = () => {
    setClosed(!isClosed);
  };
  const navlinks = [
    { label: "Home", path: "/" },
    {
      label: "Living",
      path: "/living",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
    {
      label: "Bedroom",
      path: "/bedroom",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
    {
      label: "Dining",
      path: "/dining",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
    {
      label: "Study",
      path: "/study",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
    {
      label: "Kitchen",
      path: "/kitchen",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
    {
      label: "Decor",
      path: "/decor",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
    {
      label: "Kids",
      path: "/kids",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
    {
      label: "Furnishing",
      path: "/furnishing",
      func1: () => handleMouseEnter(),
      func2: () => handleMouseLeave(),
    },
  ];
  const beds = [
    { label: "All Beds", path: "/bedroom" },
    { label: "Solid Wood Beds", path: "/bedroom" },
    { label: "Engineered Wood Beds", path: "/bedroom" },
    { label: "Sheesham Woods Beds", path: "/bedroom" },
    { label: "Teak Woods Beds", path: "/bedroom" },
    { label: "Metal Beds", path: "/bedroom" },
    { label: "Bunked Beds", path: "/bedroom" },
    { label: "Kids Beds", path: "/bedroom" },
    { label: "Upholstered Beds", path: "/bedroom" },
    { label: "Hydraulic Beds", path: "/bedroom" },
  ];
  const beddings = [
    { label: "Fitted BedSheet", path: "/bedroom" },
    { label: "Flat BedSheet", path: "/bedroom" },
    { label: "Mattress Protector", path: "/bedroom" },
    { label: "Pillow Cover", path: "/bedroom" },
    { label: "Pillow Protector", path: "/bedroom" },
    { label: "AC Blanket", path: "/bedroom" },
    { label: "Sherpa Blanket", path: "/bedroom" },
    { label: "Comforter", path: "/bedroom" },
    { label: "Kids BedSheet", path: "/bedroom" },
    { label: "Duvet Cover", path: "/bedroom" },
  ];
  const wardrobe = [
    { label: "All Wardrobes", path: "/bedroom" },
    { label: "Solid Wood Wardrobes", path: "/bedroom" },
    { label: "Engineered Wood Wardrobes", path: "/bedroom" },
    { label: "Luxury Wardrobes", path: "/bedroom" },
    { label: "2 Door Wardrobes", path: "/bedroom" },
    { label: "3 Door Wardrobes", path: "/bedroom" },
    { label: "4 Door Wardrobes", path: "/bedroom" },
  ];
  const bedroomTable = [
    { label: "Bedside Tables", path: "/bedroom" },
    { label: "Premium Bedside Tables", path: "/bedroom" },
    { label: "Computer Tables", path: "/bedroom" },
    { label: "Dressing Tables", path: "/bedroom" },
  ];
  const bedroomDecor = [
    { label: "Curtains", path: "/bedroom" },
    { label: "Wall Clock", path: "/bedroom" },
    { label: "Wall Art", path: "/bedroom" },
    { label: "Vase", path: "/bedroom" },
    { label: "Candle Holder", path: "/bedroom" },
    { label: "Hanging Pendants", path: "/bedroom" },
    { label: "Table Lamp", path: "/bedroom" },
    { label: "Wall Mirror", path: "/bedroom" },
    { label: "Floor Mirror", path: "/bedroom" },
  ];
  const pillows = [
    { label: "Sleeping Pillows", path: "/bedroom" },
    { label: "Support Pillows", path: "/bedroom" },
    { label: "Nursing Pillows", path: "/bedroom" },
    { label: "Cusions", path: "/bedroom" },
    { label: "Car Cusions", path: "/bedroom" },
    { label: "Medicinal Pillows", path: "/bedroom" },
    { label: "Maternity Pillows", path: "/bedroom" },
  ];
  const sofa = [
    { label: "All Sofa Sets", path: "/living" },
    { label: "Single Sofa", path: "/living" },
    { label: "3 Seater Sofa", path: "/living" },
    { label: "5 Seater Sofa", path: "/living" },
    { label: "L Shaped Sofa", path: "/living" },
    { label: "Ottomon Sofa", path: "/living" },
    { label: "Solid Wood Sofa", path: "/living" },
    { label: "Engineered Wood Sets", path: "/living" },
    { label: "Sofa cum Bed Sets", path: "/living" },
    { label: "Leatherette Sofa Sets", path: "/living" },
    { label: "Recliner Sets", path: "/living" },
  ];
  const chairs = [
    { label: "All Chairs", path: "/living" },
    { label: "Office Chairs", path: "/living" },
    { label: "Lounge Chairs", path: "/living" },
    { label: "Wing Chairs", path: "/living" },
    { label: "Gaming Chair", path: "/living" },
    { label: "Bean Bag", path: "/living" },
    { label: "Ottomon", path: "/living" },
  ];
  const TVunits = [
    { label: "All TV Units", path: "/living" },
    { label: "SolidWood TV Units", path: "/living" },
    { label: "Engineered Wood TV Units", path: "/living" },
  ];
  const storage = [
    { label: "All Book Shelves", path: "/living" },
    { label: "SolidWood Book Shelves", path: "/living" },
    { label: "Engineered Wood Shelves", path: "/living" },
    { label: "All Shoe racks", path: "/living" },
    { label: "SolidWood Shoe racks", path: "/living" },
    { label: "Engineered Wood racks", path: "/living" },
    { label: "Wall Shelf", path: "/living" },
    { label: "Sideboard", path: "/living" },
    { label: "Display Units", path: "/living" },
    { label: "Chest of Drawers", path: "/living" },
  ];
  const livingTables = [
    { label: "All Coffee Tables", path: "/living" },
    { label: "SolidWood Coffee Tables", path: "/living" },
    { label: "Engineered Wood Tables", path: "/living" },
    { label: "Premium Coffee Tables", path: "/living" },
    { label: "Center Tables", path: "/living" },
    { label: "Side Tables", path: "/living" },
    { label: "Console Tables", path: "/living" },
    { label: "Computer Tables", path: "/living" },
  ];
  const wallItems = [
    { label: "Wall Arts", path: "/living" },
    { label: "Wall Clocks", path: "/living" },
    { label: "Candle Holder", path: "/living" },
    { label: "Paintings", path: "/living" },
    { label: "Mirrors", path: "/living" },
    { label: "Wall Arts", path: "/living" },
    { label: "Decorative Items", path: "/living" },
  ];
  return (
    <div className="flex bg-gray-100">
      <main className="w-full flex flex-col">
        <div className="relative z-20">
          {(!isClosed || bedOpen || livingOpen) && (
            <div className="fixed inset-0 bg-black opacity-75"></div>
          )}
          {!isClosed && (
            <aside className="bg-white absolute z-50 w-[350px] min-h-screen flex flex-col">
              <div className="bg-[#27305B] text-white border-r border-b px-4 h-16 flex flex-row items-center">
                <span className="flex flex-row gap-2 w-[90%]">
                  <CgProfile className="text-4xl mt-2" />
                  <div className="text-sm">
                    <h1 className="text-lg font-semibold">My Account</h1>
                    <p>Login</p>
                  </div>
                </span>
                <RiCloseCircleLine
                  className="text-xl"
                  onClick={() => handleSideBar()}
                />
              </div>
              <div className="flex flex-row gap-4 px-3 py-2 justify-between mt-5 h-20 ">
                <div className="w-24 h-16 bg-[#355759] px-5 py-2 rounded-md hover:cursor-pointer hover:shadow-lg text-white">
                  <IoCartOutline className="text-2xl ml-2" />
                  <p>My Cart</p>
                </div>
                <div className="w-24 h-16 bg-[#355759] px-5 py-2 rounded-md hover:cursor-pointer hover:shadow-lg text-white">
                  <FaRegHeart className="text-2xl ml-2" />
                  <p>Wishlist</p>
                </div>
                <div className="w-24 h-16 bg-[#355759] px-5 py-2 rounded-md hover:cursor-pointer hover:shadow-lg text-white">
                  <CiWallet className="text-2xl ml-2" />
                  <p>Wallet</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 h-40 mt-5 border-b-2 px-3">
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <MdWindow className="text-2xl" />
                  <p>Browse Category</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <FiBriefcase className="text-2xl" />
                  <p>Nearby Stores</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <CiDiscount1 className="text-2xl" />
                  <p>Offers</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 h-40 mt-5 border-b-2 px-3">
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <TbBrandBlogger className="text-2xl" />
                  <p>Blog</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <FaPhone className="text-2xl" />
                  <p>Contact Us</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <MdLogout className="text-2xl" />
                  <p>LogOut</p>
                </div>
              </div>
            </aside>
          )}
          <header className="bg-[#27305B] z-20 h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 relative">
            {isClosed && (
              <span
                className="text-2xl text-white lg:hidden"
                onClick={() => handleSideBar()}
              >
                <LuAlignJustify className="mt-4 ml-2 hover:text-red-400" />
              </span>
            )}

            <img src={logo} className="w-24 h-[60px] ml-4 -mt-3" />

            <div className="flex-grow max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-2 flex items-center justify-center sm:ml-4">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search 5000+ products"
                className="px-2 w-[60%] sm:w-80 h-8 border-2 border-gray-400 rounded-md"
              />
              <FaSearch
                className="-ml-8 mt-2 cursor-pointer"
                onClick={searchProduct}
              />
            </div>

            <div className="hidden md:block text-white text-lg mr-10 mt-3 hover:text-amber-500">
              <NavLink to="/products">Product</NavLink>
            </div>

            <div className="flex gap-4 mt-4 text-white text-2xl">
              <div className="hover:text-red-400">
                <NavLink to="/wishlist">
                  <FaHeart />
                </NavLink>
              </div>
              <div className="hover:text-red-400">
                <NavLink to="/cart">
                  <IoCartOutline />
                </NavLink>
              </div>
              <div className="hover:text-red-400">
                <NavLink to="/signin">
                  <CgProfile />
                </NavLink>
              </div>
            </div>
          </header>

          <div className="w-full h-12 z-20 bg-[#27305B] hidden md:flex justify-between px-20 py-2 font-extralight relative">
            {navlinks.map((obj) => (
              <div
                onMouseEnter={obj.func1}
                onMouseLeave={obj.func2}
                key={obj.label}
                className="text-white relative group text-center rounded-tr-md rounded-tl-md mb-4 ml-4 w-20 h-10 hover:bg-white hover:text-black justify-between"
              >
                <NavLink to={obj.path}>{obj.label}</NavLink>
              </div>
            ))}
            {/* {!isClosed && (
            <aside className="bg-white absolute top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-20 w-[350px] min-h-screen flex flex-col">
              <div className="bg-[#27305B] text-white border-r border-b px-4 h-16 flex flex-row items-center">
                <span className="flex flex-row gap-2 w-[90%]">
                  <CgProfile className="text-4xl mt-2" />
                  <div className="text-sm">
                    <h1 className="text-lg font-semibold">My Account</h1>
                    <p>Login</p>
                  </div>
                </span>
                <RiCloseCircleLine
                  className="text-xl"
                  onClick={() => handleSideBar()}
                />
              </div>
              <div className="flex flex-row gap-4 px-3 py-2 justify-between mt-5 h-20 ">
                <div className="w-24 h-16 bg-[#355759] px-5 py-2 rounded-md hover:cursor-pointer hover:shadow-lg text-white">
                  <IoCartOutline className="text-2xl ml-2" />
                  <p>My Cart</p>
                </div>
                <div className="w-24 h-16 bg-[#355759] px-5 py-2 rounded-md hover:cursor-pointer hover:shadow-lg text-white">
                  <FaRegHeart className="text-2xl ml-2" />
                  <p>Wishlist</p>
                </div>
                <div className="w-24 h-16 bg-[#355759] px-5 py-2 rounded-md hover:cursor-pointer hover:shadow-lg text-white">
                  <CiWallet className="text-2xl ml-2" />
                  <p>Wallet</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 h-40 mt-5 border-b-2 px-3">
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <MdWindow className="text-2xl" />
                  <p>Browse Category</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <FiBriefcase className="text-2xl" />
                  <p>Nearby Stores</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <CiDiscount1 className="text-2xl" />
                  <p>Offers</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 h-40 mt-5 border-b-2 px-3">
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <TbBrandBlogger className="text-2xl" />
                  <p>Blog</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <FaPhone className="text-2xl" />
                  <p>Contact Us</p>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
                  <MdLogout className="text-2xl" />
                  <p>LogOut</p>
                </div>
              </div>
            </aside>
          )} */}
            {bedOpen && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-10 z-50 w-[1100px] h-[400px] rounded-md bg-white flex flex-row justify-between px-10"
              >
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Beds</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {beds.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Beddings</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {beddings.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Wardrobes</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {wardrobe.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Bedroom Tables</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {bedroomTable.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Bedroom Decor</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {bedroomDecor.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Pillows and Cusions</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {pillows.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {livingOpen && (
              <div className="absolute top-10 z-50 w-[1100px] h-[400px] rounded-md bg-white flex flex-row px-10 justify-between">
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Sofa & Recliners</h1>
                  </div>
                  <div className="flex flex-col gap-1">
                    {sofa.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink to={item.path}>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Chairs & Seating</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {chairs.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>TV Units</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {TVunits.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Living Room Storage</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {storage.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Livingroom Tables</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {livingTables.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="border-b mt-2 mb-2">
                    <h1>Pillows and Cusions</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    {pillows.map((item) => (
                      <div className="font-extralight hover:text-lg">
                        <NavLink>{item.label}</NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
