import React, { useState } from "react";
import image1 from "../assets/mattress1.jpg";
import image2 from "../assets/pillow1.jpg";
import image3 from "../assets/comforter1.jpg";
import { FaCross, FaStar } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiVan } from "react-icons/pi";
import { VscReplace } from "react-icons/vsc";
import { GoShieldCheck } from "react-icons/go";
import Dropdown from "react-dropdown";
import data from "../Data/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Modal = ({ detail, handleOpenModal, deviceType }) => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const sameItems = data.filter((e) => e.relatedItem === "related");
  console.log(detail);
  return (
    <div className="absolute border-2 border-gray-400 top-0 left-0 w-[1300px] h-[1100px] z-50 rounded-md p-2 flex flex-col bg-white">
      <div className="w-full h-2/4 flex flex-row gap-2 relative">
        <div className="w-1/3  p-4">
          <img
            src={detail.image}
            className=" w-80 h-60 rounded-md shadow-lg shadow-gray-500"
          />
          <div className="flex flex-row mt-4 gap-4 ml-2">
            <div>
              <img
                src={detail.image}
                className="w-16 h-16 border-2 border-gray-400 rounded-lg"
              />
            </div>
            <div>
              <img
                src={detail.image}
                className="w-16 h-16 border-2 border-gray-400 rounded-lg"
              />
            </div>
            <div>
              <img
                src={detail.image}
                className="w-16 h-16 border-2 border-gray-400 rounded-lg"
              />
            </div>
            <div>
              <img
                src={detail.image}
                className="w-16 h-16 border-2 border-gray-400 rounded-lg"
              />
            </div>
          </div>
        </div>
        <button
          className="w-[5%] h-8 text-xl absolute top-1 left-[1200px]"
          onClick={handleOpenModal}
        >
          <IoIosCloseCircleOutline />
        </button>
        <div className="flex flex-col w-1/3 gap-4 mt-4 border-r-2 border-gray-300">
          <div>
            <p className="text-xl font-semibold uppercase">{detail.name}</p>
          </div>

          <div className="flex flex-row gap-2 align-middle">
            <span className="flex flex-row text-amber-400 text-xs">
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p className="text-sm font-extralight -mt-1">23 reviews</p>
          </div>
          <div className="border-b-2 border-gray-300">
            <p
              className="text-sm
          font-extralight"
            >
              <b>400+</b> bought last month
            </p>
          </div>
          <p className="text-sm font-normal mt-2">{detail.description}</p>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
              <p className=" text-red-500 mt-0.5">-25%</p>
              <p className="font-semibold text-xl ">
                $ {detail.price * (1 / 4)} /-
              </p>
            </div>
            <div className="line-through text-xs text-gray-500">
              MRP:. Rs {detail.price}
            </div>
            <div className="flex flex-col text-sm border-b-2 border-gray-300">
              <p>Inclusive of all taxes</p>
              <p>
                <b>EMI</b> starts at Rs 2100/- only. <b>No Cost</b> EMI
                available.
              </p>
            </div>
          </div>

          <div className="flex flex-row font-semibold gap-2">
            <p className="text-lg font-normal">Sizes:</p>
            <p className="border-2 border-gray-400 rounded-lg w-8 text-center hover:bg-amber-400 hover:text-white text-gray-600">
              S
            </p>
            <p className="border-2 border-gray-400 rounded-lg w-8 text-center hover:bg-amber-400 hover:text-white text-gray-600">
              M
            </p>
            <p className="border-2 border-gray-400 rounded-lg w-8 text-center hover:bg-amber-400 hover:text-white text-gray-600">
              L
            </p>
          </div>
          <div className="flex flex-row gap-2 justify-between w-60">
            <span className="flex flex-col">
              <PiVan className="text-3xl ml-1" />
              <p className="text-xs">Free Delivery</p>
            </span>
            <span className="flex flex-col w-1/3 ml-2">
              <VscReplace className="text-3xl ml-2" />
              <p className="text-xs ">10 days replacement</p>
            </span>
            <span className="flex flex-col">
              <GoShieldCheck className="text-3xl ml-2" />
              <p className="text-xs">1 year Warantee</p>
            </span>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-2 overflow-scroll">
          <p className="text-sm p-2">
            FREE installation at the time of delivery as soon as{" "}
            <b>Monday 29th Jan, 7am-8pm</b>. Order within <g>10 hrs 15 mins</g>
          </p>
          <p className="text-xl text-green-600">In Stock</p>
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-3">
                <p className="text-sm font-normal">Payment</p>
                <p className="text-sm font-normal text-[#4078AE]">
                  Secure Transaction
                </p>
              </li>
              <li className="flex flex-row gap-3">
                <p className="text-sm font-normal">Ships from</p>
                <p className="text-sm font-normal text-[#4078AE]">Woodscraft</p>
              </li>
              <li className="flex flex-row gap-3">
                <p className="text-sm font-normal">Sold by</p>
                <p className="text-sm font-normal text-[#4078AE]">
                  Sanjay furnitures
                </p>
              </li>
              <li className="flex flex-row gap-3">
                <p className="text-sm font-normal">Packaging</p>
                <p className="text-sm font-normal text-[#4078AE]">
                  Ships in product packaging
                </p>
              </li>
            </ul>
          </div>
          <p className="text-lg font-normal">Quantity:</p>
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="quantity: 1"
          />
          <div className="items-center flex flex-col gap-5 mt-4">
            <button className="rounded-md w-40 border-2 border-black hover:bg-amber-400 hover:text-white hover:border-white">
              Add to Cart
            </button>
            <button className="rounded-md w-40 border-2 border-black hover:bg-amber-400 hover:text-white hover:border-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 flex flex-col px-4 py-2 gap-4 border-t-2 border-gray-400">
        <p className="font-semibold text-xl">Frequently bought together</p>
        <div className="flex flex-row p-2 gap-4">
          <div className="shadow-gray-500 shadow-xl rounded-md w-60 h-48 flex flex-col border-2 border-gray-300 relative">
            <input type="checkbox" className="top-1 left-[220px] absolute" />
            <div className="w-full h-full bg-gray-100 rounded-md">
              <img
                src={image1}
                alt="image1"
                className="rounded-lg w-[220px] h-36 p-2 mt-2 ml-1.5"
              />
            </div>
            <p className="text-xs font-medium text-center">
              Mattress |8 inches| Spring plus foam.{" "}
            </p>
            <p className="text-sm text-center font-medium">$ 255</p>
          </div>
          <p className="text-4xl font-bold text-gray-500 mt-20">+</p>
          <div className="shadow-gray-500 shadow-xl rounded-md w-60 h-48 flex flex-col border-2 border-gray-300 relative">
            <input type="checkbox" className="top-1 left-[220px] absolute" />
            <div className="w-full h-full bg-gray-100 rounded-md">
              <img
                src={image2}
                alt="image1"
                className="rounded-lg w-[220px] h-36 p-2 mt-2 ml-1.5"
              />
            </div>
            <p className="text-xs font-medium text-center">
              Pillow |2-set| Cotton plus foam.
            </p>
            <p className="text-sm text-center font-medium">$ 255</p>
          </div>
          <p className="text-4xl font-bold text-gray-500 mt-20">+</p>
          <div className="shadow-gray-500 shadow-xl rounded-md w-60 h-48 flex flex-col border-2 border-gray-300 relative">
            <input type="checkbox" className="top-1 left-[220px] absolute" />
            <div className="w-full h-full bg-gray-100 rounded-md">
              <img
                src={image3}
                alt="image1"
                className="rounded-lg w-[220px] h-36 p-2 mt-2 ml-1.5"
              />
            </div>
            <p className="text-xs font-medium text-center">
              Comforter|XL|Cotton plus foam.
            </p>
            <p className="text-sm text-center font-medium">$ 255</p>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <p>Total price:</p>
              <p className="text-xl font-semibold">$ 750 /-</p>
            </div>
            <button className="w-40 h-8 rounded-2xl bg-[#FFD814] text-center">
              Add these to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 flex flex-col mt-6 gap-2 border-t-2 border-gray-400">
        <p className="text-xl font-semibold ml-10">Related Products</p>
        <div className="flex flex-row gap-4 px-4 ">
          {sameItems.map((obj) => (
            <div className="border-2 w-48 h-[220px] shadow-xl shadow-gray-400 border-gray-400 bg-gray-100 rounded-xl flex flex-col">
              <div className="w-[188px] h-[148px] bg-gray-100 rounded-xl">
                <img src={obj.image} className="w-44 h-36 p-1 ml-1.5" />
              </div>
              <div className="px-2 -mt-1">
                <p>{obj.name}</p>
                <span className="flex flex-row text-xs text-amber-300"><p className="text-black">4.3</p>
                  <FaStar/><FaStar/><FaStar/>
                </span>
                <div className="flex flex-row gap-2">
                <p className="text-red-500 text-sm">27%</p>
                <p className="text-sm font-semibold">$ {Math.round(obj.price*(2/3))}</p>
                </div>
                <p className="line-through text-xs">{obj.price}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
