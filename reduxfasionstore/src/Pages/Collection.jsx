import React from "react";
import image from "../assets/collection.jpeg";
import image10 from "../assets/image10.jpeg";
import image12 from "../assets/image12.jpeg";
import image13 from "../assets/image13.jpeg";
import image14 from "../assets/image14.jpeg";
import image15 from "../assets/image15.jpeg";
import image16 from "../assets/image16.jpeg";
import image17 from "../assets/image17.jpeg";
import image18 from '../assets/image18.jpeg';
import image19 from '../assets/image19.jpeg';
import image20 from '../assets/image20.jpeg';
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();

  const collections = [
    { image: image10, name: "Copenhagen" },
    { image: image12, name: "Greek" },
    { image: image13, name: "Manhattan" },
    { image: image14, name: "Travancore" },
    { image: image15, name: "English" },
    { image: image16, name: "Italian" },
    { image: image17, name: "Chinese" },
    { image: image18, name: "Vedang" },
    { image: image19, name: "Classic" },
    { image: image20, name: "Modern" },
  ];

  return (
    <div className="p-2 flex flex-col gap-5 w-full h-full">
      {/* Banner Section */}
      <div className="w-full h-60 relative">
        <img src={image} alt="image_banner" className="w-full h-full object-cover rounded-md" />
        <p className="absolute top-32 left-[30%] text-[#E8E8E8] text-md font-thin z-50">
          Discover each piece from our
        </p>
        <h1 className="absolute top-36 left-[28%] text-[#cbc8c8] text-5xl font-thin tracking-widest z-50">
          Collections
        </h1>
      </div>

      {/* Collections Grid Section */}
      <div className="w-full h-full flex justify-center">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-md overflow-hidden cursor-pointer"
              onClick={() => navigate(`/collection/${item.name.toLowerCase()}`)}  // Dynamic navigation
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{item.name}</h2>
                <button className="bg-transparent text-white px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
