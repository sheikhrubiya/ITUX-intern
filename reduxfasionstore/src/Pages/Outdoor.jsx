import React from "react";
import Data from "../Data/Data";
import { FaStar } from "react-icons/fa";
import image1 from '../assets/outdoor7.jpg'
const Outdoor = () => {
  const filterData = Data.filter((obj) => obj.category === "Outdoor");
  return (
    <div className="w-full h-full flex flex-col">
     <div className="w-full h-[500px] flex relative px-5 py-2">
     <img src={image1} alt="image" className="w-[1200px] h-[400px]"/>
      <p className="absolute text-white text-3xl font-extralight top-36 left-[560px] text-center">Feel new</p>
      <p className="absolute text-white text-5xl font-medium top-48 left-[500px]">OutDoor Living</p>
     </div>
     <div className=" w-full h-60 p-0 gap-10 flex flex-col">
      <p className="text-center text-2xl font-semibold">Outdoor & Indoor Living</p>
      <p className="text-center text-sm font-extralight w-[700px] ml-60">Embark on a journey of outdoor rejuvenation, where every piece of furniture exudes allure and charm, beckoning you to unwind and immerse yourself in the beauty of nature. Let your outdoor space undergo a remarkable makeover showcasing exquisite furnishings from DTALE Modern that promise to elevate your outdoor experience to new heights of elegance and sophistication.</p>
     </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-2">
        {filterData.map((item) => (
          <div
            key={item.id}
            className="border-2 border-slate-200 w-full h-[350px] sm:h-[400px] rounded-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-40 rounded-md"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <p className="text-sm text-gray-500">
                {item.description.substring(0, 50)}...
              </p>
              <p className="text-red-600 font-semibold mt-2">${item.price}</p>
              <div>
                <p>Rating: 4.3</p>
                <span className="flex flex-row text-amber-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <button className="w-full h-10 mt-4 border-2 border-black rounded-md hover:bg-slate-500 hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outdoor;
