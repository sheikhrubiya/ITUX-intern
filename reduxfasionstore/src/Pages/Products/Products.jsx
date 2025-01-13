import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Data from "../../Data/Data";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
const Products = () => {
  return (
    <div>
      <h1 className="heading">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Data.map((obj) => (
          <div
            key={obj.id}
            className="relative border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              <img
                src={obj.image}
                alt={obj.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition">
                  <AiFillHeart />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition">
                  <AiFillEye />
                </button>
              </div>
            </div>

            <div className="p-3 text-center items-center">
              <h3 className="text-black text-sm font-semibold uppercase mb-1">
                {obj.name}
              </h3>
              <p className="text-sm mb-5 mt-2">
                {obj.description.substring(0, 50)}
              </p>
              <p className="ml-14 font-light text-md tracking-wide flex flex-row gap-3 items-center">
                Rating {obj.rating && obj.rating}
                <FaStar />
              </p>
              <p className="text-red-600 font-bold mb-2">${obj.price}</p>
              <button className="w-full bg-[#8A624A] text-white py-2 rounded hover:bg-[#c17e57] transition">
                Add to Cart
              </button>
            </div>
            <div className="absolute top-0 left-0 bg-red-500 text-white text-sm capitalize px-3 py-1">
              {obj.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
