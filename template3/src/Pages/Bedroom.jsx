import React, { useState } from "react";
import Data from "../Data/Data";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import Modal from "../Components/Modal";

const Bedroom = ({ addtocart, addtowishlist, handleOpenModal, detail, modal }) => {
  const [rangeValue, setRangeValues] = useState({ min: 0, max: 100 });
  const handleRangeChange = (value) => setRangeValues(value);
  const bed = Data.filter((item) => item.category === "Bed");

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Filters Sidebar */}
      <div className="w-full lg:w-60 h-auto flex flex-col border-2 border-gray-200 p-4 lg:h-screen">
        <div className="flex flex-row justify-between mb-4">
          <p className="text-xl font-semibold">Filters</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Reset</button>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Price Range</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">1000-5000</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">5000-10000</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">10000-25000</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">25000-100000</p>
            </div>
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Size</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">King</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Queen</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Single</p>
            </div>
          </div>
        </div>

        {/* Assembly Type Filter */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Assembly Type</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Carpenter Assembly</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">DIY</p>
            </div>
          </div>
        </div>

        {/* Headboard Type Filter */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Headboard Type</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Headboard with box</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Headboard without Box</p>
            </div>
          </div>
        </div>

        {/* Wood Type Filter */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Wood Type</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Teak</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Sheesham</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Engineered Wood</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Solid Wood</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoIosCheckboxOutline />
              <p className="text-sm">Metal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full p-4 bg-gray-100">
        <div className="flex flex-wrap justify-start mb-6 gap-4">
          <div className="w-32 h-10 flex justify-center items-center border-2 border-black rounded-md cursor-pointer text-sm hover:bg-[#27305B] hover:text-white">
            Sheesham Wood
          </div>
          <div className="w-32 h-10 flex justify-center items-center border-2 border-black rounded-md cursor-pointer text-sm hover:bg-[#27305B] hover:text-white">
            Teak Wood
          </div>
          <div className="w-32 h-10 flex justify-center items-center border-2 border-black rounded-md cursor-pointer text-sm hover:bg-[#27305B] hover:text-white">
            Solid Wood
          </div>
          <div className="w-32 h-10 flex justify-center items-center border-2 border-black rounded-md cursor-pointer text-sm hover:bg-[#27305B] hover:text-white">
            Engineered Wood
          </div>
          <div className="w-32 h-10 flex justify-center items-center border-2 border-black rounded-md cursor-pointer text-sm hover:bg-[#27305B] hover:text-white">
            Metal
          </div>
          <div className="w-32 h-10 flex justify-center items-center border-2 border-black rounded-md cursor-pointer text-sm hover:bg-[#27305B] hover:text-white">
            Bunk Beds
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {bed.map((obj) => (
            <div
              key={obj.id}
              className="w-full h-auto flex flex-col border-2 border-gray-300 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer" onClick={() => addtowishlist(obj)} />
                <IoEye className="text-gray-500 hover:text-blue-500 cursor-pointer" onClick={() => handleOpenModal(obj)} />
              </div>
              <img src={obj.image} alt="Product" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="flex flex-col p-4">
                <p className="text-lg font-semibold uppercase">{obj.name}</p>
                <p className="text-sm font-light text-gray-600">{obj.description.substring(0, 50)}...</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm font-semibold ">${obj.price}</p>
                  <p className="text-sm text-gray-400 line-through">${(obj.price * (2 / 5)).toFixed(2)}</p>
                </div>
                <div className="flex text-xs items-center gap-1 mt-2 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <button
                  className="bg-yellow-400 text-white py-2 rounded-md mt-4 hover:bg-yellow-500 transition-colors"
                  onClick={() => addtocart(obj)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && <Modal detail={detail} handleOpenModal={handleOpenModal} />}
    </div>
  );
};

export default Bedroom;
