import React, { useState } from "react";
import Data from "../Data/Data";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
const Products = ({addtocart,handleOpenModal,modal, detail}) => {
  const [rangeValue, setRangeValues] = useState({ min: 0, max: 100 });
  const navigate = useNavigate();
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
        
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-gray-200 px-4 gap-y-4">
          {Data.map((obj) => (
            <div className="w-60 h-80 flex flex-col border-2 border-black rounded-md bg-white relative shadow-lg hover:shadow-gray-400">
              {/* <div className="text-white flex flex-col gap-2 text-xl absolute top-6 left-44">
              <FaHeart className="hover:text-red-300"/>
              <IoEye className="hover:text-red-300"/>
              </div> */}
              <img src={obj.image} alt="image" className="w-full h-40" />
              <div className="flex flex-col p-2">
                <p className="text-lg font-medium">{obj.name}</p>
                <p className="text-sm font-extralight">
                  {obj.description.substring(0, 50)}
                </p>
                <div className="flex flex-row gap-2">
                <p className="text-black font-semibold">$ {obj.price}</p>
                <p className="line-through text-gray-500 text-sm mt-0.5">$ {obj.price}</p>
                </div>
                
                <span className="flex flex-row text-amber-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <div className="flex flex-row p-2 gap-1 -mt-2">
              <button className=" border-2 border-black hover:text-white hover:bg-[#445394] w-36 rounded-md" onClick={() => addtocart(obj)}>Add to Cart</button>
              <button className=" border-2 border-black hover:text-white hover:bg-[#445394] w-36 rounded-md" onClick={()=>handleOpenModal(obj)} >View Details</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      {modal && <Modal detail={detail} handleOpenModal={handleOpenModal} />}
    </div>
  );
};

export default Products;
