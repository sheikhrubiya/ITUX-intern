import React, { useState } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import Slider from "../../components/Slider/Slider";
import Banner from "../../components/Banner/Banner";
import Banner2 from "../../components/Banner/Banner2";
import Testimonial from "../../components/Testimonial/Testimonial";
import Data from "../../Data/Data";
import { div } from "framer-motion/client";

export default function Home() {
  const [trending, setTrending] = useState(Data);

  // Filter trending products
  const filtercategory = (x) => {
    const filterproduct = Data.filter((obj) => obj.type === x);
    setTrending(filterproduct);
  };

  // Reset to all trending products
  const allTrending = () => {
    setTrending(Data);
  };

  return (
    <div className="w-full">
      {/* Slider Section */}
      <div className="w-full">
        <Slider />
      </div>

      {/* Trending Products Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Trending Products Header */}
        <div className="bg-[#A48269] p-4 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 
              onClick={allTrending}
              className="text-black text-lg font-bold uppercase cursor-pointer hover:text-red-500 mb-4 md:mb-0"
            >
              Trending Products
            </h2>
            
            {/* Category Filters */}
            <div className="relative flex space-x-4">
              {[
                { label: "New", type: "new" },
                { label: "Featured", type: "featured" },
                { label: "Top Selling", type: "topselling" }
              ].map((category) => (
                <div className="relative">
                <h3
                  key={category.type}
                  onClick={() => filtercategory(category.type)}
                  className="text-black text-sm font-semibold uppercase cursor-pointer hover:text-red-600 transition"
                >
                  {category.label}
                </h3>
                
                </div>
                
                
              ))}
              
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trending.map((obj) => (
            <div
              key={obj.id}
              className="border-2 border-stone-300 bg-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={obj.image}
                  alt={obj.name}
                />
                {/* Quick Action Buttons */}
                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition">
                    <AiFillEye />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition">
                    <AiFillHeart />
                  </button>
                </div>
                <div className="absolute top-0 left-0 text-sm text-white bg-red-600">{obj.type}</div>
              </div>
              
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{obj.name}</h3>
                <p className="text-red-600 font-semibold mb-3">${obj.price}</p>
                <button className="w-full bg-[#8A624A] text-white py-2 rounded hover:bg-[#c17e57] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
            Show More
          </button>
        </div>
      </div>

      {/* Banners and Testimonial Section */}
      <div className="container mx-auto px-4 space-y-8">
        <Banner />
        <Banner2 />
        <Testimonial />
      </div>
    </div>
  );
}
