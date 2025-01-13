import React from "react";
import brand1 from "../assets/brand1.jpg";
import brand2 from "../assets/brand2.jpg";
import brand3 from "../assets/brand3.jpg";
import brand4 from "../assets/brand4.jpg";
import { IoCubeOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineFactory, MdOutlineHighQuality } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { IoMdGlobe } from "react-icons/io";
import { FaHandsHoldingChild } from "react-icons/fa6";
const Featured = () => {
  return (
    <div>
      <h1 className="text-center w-full h-8 mt-20 text-2xl font-semibold">
        Featured In
      </h1>
      <div className="flex flex-row justify-between w-full h-40">
        <img src={brand1} alt="brand1" />
        <img src={brand2} alt="brand2" />
        <img src={brand3} alt="brand3" />
        <img src={brand4} alt="brand4" />
      </div>
      <div className="w-full flex flex-col justify-between h-48">
        <div className="flex flex-row justify-between px-5">
          <div className="border-2 border-slate-500 h-20 p-4 flex flex-row w-60 gap-2">
            <span className="text-5xl">
              <IoShieldCheckmarkOutline />
            </span>
            <p className="font-normal text-sm mt-2">
              10 Years Warranty
            </p>
          </div>
          <div className="border-2 border-slate-500 h-20 p-2 flex flex-row w-60 gap-2">
            <span className="text-5xl">
            <MdOutlineFactory/>
            </span>
            <p className="font-normal text-sm mt-2">
              Direct selling: Factory to customer
            </p>
          </div>
          <div className="border-2 border-slate-500 h-20 p-4 flex flex-row w-60 gap-2">
            <span className="text-5xl">
            <MdOutlineHighQuality/>
            </span>
            <p className="font-normal text-sm mt-2">
              Quality Check
            </p>
          </div>
          <div className="border-2 border-slate-500 h-20 p-4 flex flex-row w-60 gap-2">
            <span className="text-5xl">
            <FaFire/>
            </span> 
            <p className="font-normal text-sm mt-2">
              Heat Treated
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-5">
          <div className="border-2 border-slate-500 h-20 p-4 flex flex-row w-60 gap-2">
            <span className="text-5xl">
            <IoCubeOutline/>
            </span>
            <p className="font-normal text-sm mt-1">
              Ergonomically Designed
            </p>
          </div>
          <div className="border-2 border-slate-500 h-20 p-4 flex flex-row w-60 gap-2">
            <span className="text-5xl">
            <SiHiveBlockchain/>
            </span>
            <p className="font-normal text-sm mt-1">
              Generations Long Durability
            </p>
          </div>
          <div className="border-2 border-slate-500 h-20 p-4 flex flex-row w-60 gap-2">
            <span className="text-5xl">
            <IoMdGlobe/>
            </span>
            <p className="font-normal text-sm mt-1">
              All India Service Warranty
            </p>
          </div>
          <div className="border-2 border-slate-500 h-20 p-4 flex flex-row w-60 gap-2">
            <span className="text-5xl">
            <FaHandsHoldingChild/>
            </span>
            <p className="font-normal text-sm mt-2">
              Free Of Child Labour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
