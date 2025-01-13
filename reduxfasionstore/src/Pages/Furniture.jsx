import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import Modal from "../Components/Modal";

const Furniture = ({
  detail,
  Filter,
  Shop,
  allCategoryFilter,
  handlePriceFilter,
  addtocart,
  addtowishlist,
  handleOpenModal,
  modal,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const category = [
    { label: "All", action: allCategoryFilter },
    { label: "Bed", action: () => Filter("Bed") },
    { label: "Sofa", action: () => Filter("Sofa") },
    { label: "Table", action: () => Filter("Table") },
    { label: "Chair", action: () => Filter("Chair") },
    { label: "Almirah", action: () => Filter("Almirah") },
  ];

  const price = [
    { label: "100-1000", min: 100, max: 1000 },
    { label: "1000-5000", min: 1000, max: 5000 },
    { label: "5000-10000", min: 5000, max: 10000 },
    { label: "10K-100K", min: 10000, max: 100000 },
  ];

  const size = [
    { size: "7-feet" },
    { size: "8-feet" },
    { size: "9-feet" },
    { size: "10-feet" },
    { size: "11-feet" },
    { size: "12-feet" },
  ];

  const shape = [
    { shape: "Round" },
    { shape: "Oval" },
    { shape: "Square" },
    { shape: "Rectangle" },
    { shape: "Unique" },
  ];

  const discount = [
    { amount: "5%" },
    { amount: "10%" },
    { amount: "20%" },
    { amount: "30%" },
    { amount: "40%" },
  ];

  return (
    <section className="relative w-full h-full">
      <div className={`flex flex-col lg:flex-row mt-4`}>
        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar Filter Section */}
        <div
          className={`lg:w-1/4 w-full bg-white lg:border-r-2 border-slate-300 p-4 space-y-6 z-50 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative top-0 left-0 bottom-0 overflow-y-auto`}
        >
          {/* Category Filter */}
          <div className="Category">
            <p className="text-lg font-semibold tracking-wide">Product Type</p>
            <ul className="space-y-3">
              {category.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row gap-2 items-center cursor-pointer hover:text-slate-600 hover:text-xl"
                  onClick={item.action}
                >
                  <MdCheckBoxOutlineBlank className="mt-1" />
                  <p className="font-thin">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="price">
            <p className="text-lg font-semibold tracking-wide">Price</p>
            <ul className="space-y-3">
              {price.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row gap-2 items-center cursor-pointer hover:text-slate-600"
                >
                  <MdCheckBoxOutlineBlank className="mt-1" />
                  <p className="font-thin">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Size Filter */}
          <div className="size">
            <p className="text-lg font-semibold tracking-wide">Size</p>
            <ul className="space-y-3">
              {size.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row gap-2 items-center cursor-pointer hover:text-slate-600"
                >
                  <MdCheckBoxOutlineBlank className="mt-1" />
                  <p className="font-thin">{item.size}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Shape Filter */}
          <div className="shape">
            <p className="text-lg font-semibold tracking-wide">Shape</p>
            <ul className="space-y-3">
              {shape.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row gap-2 items-center cursor-pointer hover:text-slate-600"
                >
                  <MdCheckBoxOutlineBlank className="mt-1" />
                  <p className="font-thin">{item.shape}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Discount Filter */}
          <div className="discount">
            <p className="text-lg font-semibold tracking-wide">Discount</p>
            <ul className="space-y-3">
              {discount.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row gap-2 items-center cursor-pointer hover:text-slate-600"
                >
                  <MdCheckBoxOutlineBlank className="mt-1" />
                  <p className="font-thin">{item.amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Sidebar Toggle Button */}
        <button
          className="lg:hidden text-white bg-black p-3 rounded-md mt-2 ml-4 z-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close" : "Filters"}
        </button>

        {/* Product Grid Section */}
        <div className="flex-1 mt-4 lg:mt-0">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 ml-4">
            {["Living Room", "Bed Room", "Dining Room", "Study Room", "Outdoor"].map(
              (category, index) => (
                <div
                  key={index}
                  className="w-40 h-14 border-2 border-slate-300"
                >
                  <p className="text-md tracking-wider font-thin h-[52px] text-black mt-3 hover:text-lg text-center">
                    {category}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-2">
            {Shop.map((item) => (
              <div
                key={item.id}
                className="relative border-2 border-slate-200 w-full h-[350px] sm:h-[400px] rounded-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-40 rounded-md"
                />
                <div className="absolute top-5 left-44 text-red-500 flex flex-col gap-4">
                  <div className="hover:text-lg" onClick={() => addtowishlist(item)}>
                    <FaHeart />
                  </div>
                  <div className="hover:text-lg" onClick={() => handleOpenModal(item)}>
                    <FaEye />
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <p className="text-sm text-gray-500">{item.description.substring(0, 50)}...</p>
                  <p className="text-red-600 font-semibold mt-2">${item.price}</p>
                  <div>
                    <p>Rating: 4.3</p>
                    <span className="flex flex-row text-amber-300">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                  <button
                    className="w-full h-10 mt-4 border-2 border-black rounded-md hover:bg-slate-500 hover:text-white"
                    onClick={() => addtocart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modal && <Modal detail={detail} handleOpenModal={handleOpenModal} />}
    </section>
  );
};

export default Furniture;
