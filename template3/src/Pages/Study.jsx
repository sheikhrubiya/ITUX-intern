import React, { useState } from "react";
import Data from "../Data/Data";
import PriceRangeSlider from "../Components/PriceRangeSlider";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
const Study = () => {
  const [rangeValue, setRangeValues] = useState({ min: 0, max: 100 });
  const handleRangeChange = (value) => {
    setRangeValues(value);
  };
  const bed=Data.filter((item)=>item.category==='Bed')
  return (
    <div className="flex flex-row">
      <div className="w-60 h-full flex flex-col border-2 border-gray-200">
        <div className="flex flex-row justify-between p-2 border-b-2 border-gray-400">
          <p className="text-xl font-normal">Filters</p>
          <button className="px-2 border-2 border-white text-black bg-blue-400 rounded-md">
            Reset
          </button>
        </div>
        <div className="flex flex-col p-2 text-gray-600 font-semibold">
          <p className="text-xl font-normal py-2">Price Range</p>
          {/* <PriceRangeSlider min={200} max={1000} onChange={handleRangeChange}/> */}
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">$ 1000-5000</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">5000-10000</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">10000-25000</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">25000-100000</p>
          </div>
        </div>
        <div className="flex flex-col p-2 text-gray-600 font-semibold">
          <p className="text-xl font-normal py-2">Size</p>
          {/* <PriceRangeSlider min={200} max={1000} onChange={handleRangeChange}/> */}
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">King</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Queen</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Single</p>
          </div>
        </div>
        <div className="flex flex-col p-2 text-gray-600 font-semibold">
          <p className="text-xl font-normal py-2">Assembly Type</p>
          {/* <PriceRangeSlider min={200} max={1000} onChange={handleRangeChange}/> */}
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Carpenter Assembly</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">DIY</p>
          </div>
        </div>
        <div className="flex flex-col p-2 text-gray-600 font-semibold">
          <p className="text-xl font-normal py-2">Headboard Type</p>
          {/* <PriceRangeSlider min={200} max={1000} onChange={handleRangeChange}/> */}
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Headboard with box</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Headboard without Box</p>
          </div>
        </div>
        <div className="flex flex-col p-2 text-gray-600 font-semibold">
          <p className="text-xl font-normal py-2">Wood Type</p>
          {/* <PriceRangeSlider min={200} max={1000} onChange={handleRangeChange}/> */}
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Teak</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Sheesham</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Engineered wood</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Solid Wood</p>
          </div>
          <div className="flex flex-row gap-2 hover:text-lg cursor-pointer">
            <span className="text-md font-light mt-1">
              <IoIosCheckboxOutline />
            </span>
            <p className="text-md font-light">Metal</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full bg-gray-200">
        <div className="w-full h-20 flex flex-row p-4 justify-between">
          <div className="w-40 h-8 border-2 border-black text-center rounded-md hover:bg-[#1D3B3D] hover:text-white bg-white">
            Sheesham Wood
          </div>
          <div className="w-40 h-8 border-2 border-black text-center rounded-md hover:bg-[#1D3B3D] hover:text-white bg-white">
            Teak Wood
          </div>
          <div className="w-40 h-8 border-2 border-black text-center rounded-md hover:bg-[#1D3B3D] hover:text-white bg-white">
            Solid Wood
          </div>
          <div className="w-40 h-8 border-2 border-black text-center rounded-md hover:bg-[#1D3B3D] hover:text-white bg-white">
            Engineered Wood
          </div>
          <div className="w-40 h-8 border-2 border-black text-center rounded-md hover:bg-[#1D3B3D] hover:text-white bg-white">
            Metal
          </div>
          <div className="w-40 h-8 border-2 border-black text-center rounded-md hover:bg-[#1D3B3D] hover:text-white bg-white">
            Bunk Beds
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-gray-200 px-4 gap-y-4">
          {bed.map((obj) => (
            <div className="w-60 h-80 flex flex-col border-2 border-black rounded-md bg-white relative shadow-lg hover:shadow-gray-400">
              <div className="text-white flex flex-col gap-2 text-xl absolute top-6 left-44">
              <FaHeart className="hover:text-red-300"/>
              <IoEye className="hover:text-red-300"/>
              </div>
              <img src={obj.image} alt="image" className="w-full h-40" />
              <div className="flex flex-col p-2">
                <p className="text-lg font-medium">{obj.name}</p>
                <p className="text-sm font-extralight">
                  {obj.description.substring(0, 50)}
                </p>
                <p className="text-red-500">$ {obj.price}</p>
                <span className="flex flex-row text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <button className="bg-amber-300 border-2 border-black hover:text-white hover:bg-[#1D3B3D] w-36 rounded-md ml-10">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Study;
