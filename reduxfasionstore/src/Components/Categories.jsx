import React from "react";
import image1 from "../assets/image6.jpg";
import image2 from "../assets/image3.jpg";
import image3 from "../assets/office.jpg";
import dining from "../assets/dining.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate= useNavigate();
  return (
    <div className="px-5 md:px-16 mt-10">
      {/* Header Section */}
      <div className="flex flex-col w-full text-center mb-10">
        <h1 className="text-3xl font-normal text-gray-800">We Believe You Are Unique</h1>
        <p className="text-lg text-gray-600 mt-4">
          Why settle for furniture that is made for someone else? With aesthetic designs, premium materials, and skilled artisanship, our team is committed to improving your shopping experience.
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" >
        {/* Category 1 - Bedroom */}
        <div onClick={()=>navigate('/bedroom')}
          className="bg-cover bg-center h-80 rounded-md flex flex-col justify-end p-4 hover:shadow-lg hover:shadow-gray-400"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <p className="text-center text-white font-bold text-2xl mb-4">Bed Room</p>
          <NavLink to="/bedroom" aria-label="Shop Bed Room" className="border-2 border-gray-50 h-8 w-24 mx-auto rounded-md text-red-600 font-bold text-center hover:bg-white hover:text-black">
            Shop Now
          </NavLink>
        </div>

        {/* Category 2 - Living Room */}
        <div onClick={()=>navigate('/livingroom')}
          className="bg-cover bg-center h-80 rounded-md flex flex-col justify-end p-4 hover:shadow-lg hover:shadow-gray-400"
          style={{ backgroundImage: `url(${image2})` }} 
        >
          <p className="text-center text-white font-bold text-2xl mb-4">Living Room</p>
          <NavLink to="/livingroom" aria-label="Shop Living Room" className="border-2 border-gray-50 h-8 w-24 mx-auto rounded-md text-red-600 font-bold text-center hover:bg-white hover:text-black">
            Shop Now
          </NavLink>
        </div>

        {/* Category 3 - Office */}
        <div onClick={()=>navigate('/office')}
          className="bg-cover bg-center h-80 rounded-md flex flex-col justify-end p-4 hover:shadow-lg hover:shadow-gray-400"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <p className="text-center text-white font-bold text-2xl mb-4">Office</p>
          <NavLink to="/office" aria-label="Shop Office" className="border-2 border-gray-50 h-8 w-24 mx-auto rounded-md text-red-600 font-bold text-center hover:bg-white hover:text-black">
            Shop Now
          </NavLink>
        </div>

        {/* Category 4 - Dining */}
        <div onClick={()=>navigate('/dining')}
          className="bg-cover bg-center h-80 rounded-md flex flex-col justify-end p-4 hover:shadow-lg hover:shadow-gray-400"
          style={{ backgroundImage: `url(${dining})` }}
        >
          <p className="text-center text-white font-bold text-2xl mb-4">Dining</p>
          <NavLink to="/dining" aria-label="Shop Dining" className="border-2 border-gray-50 h-8 w-24 mx-auto rounded-md text-red-600 font-bold text-center hover:bg-white hover:text-black">
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
