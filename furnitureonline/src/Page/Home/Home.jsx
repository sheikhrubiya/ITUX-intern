import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import Banner2 from "../../components/Banner/Banner2";
import Brands from "../../components/Brands/Brands";
import Services from "../../components/Services/Services";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonial from "../../components/Testimonial/Testimonial";
import banner3 from "../../assets/furnitures/salefurniture.jpg";
import Data from "../../Data/Data";
import { AiFillEye, AiFillEyeInvisible, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import person1 from "../../assets/person/1.jpg";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  const [trending, setTrending] = useState(Data);
  //filter of trending product
  const filtercategory = (x) => {
    const filterproduct = Data.filter((obj) => {
      return obj.type === x;
    });
    setTrending(filterproduct);
  };
  const allTrending = () => {
    setTrending(Data);
  };
  return (
    <>
      <div className=" m-0 p-0 font-sans box-border w-full">
        <div className="max-w-full">
          <Slider />
          {/* <Hero/> */}
        </div>
        <div className="px-5 py-8 w-full">
          <div className="max-w-full flex">
            <div className="px-2.5 py-5 w-full">
              <div className="flex max-w-full p-2.5 bg-stone-200 justify-between">
                <div className="heading">
                  <h2
                    onClick={() => allTrending()}
                    className="uppercase text-sm text-black mt-1.5 cursor-pointer hover:text-red-500"
                  >
                    trending products
                  </h2>
                </div>
                <div className="flex mt-1.5">
                  <h3
                    onClick={() => filtercategory("new")}
                    className="uppercase mr-2.5 text-black text-sm cursor-pointer hover:text-red-600 duration-75"
                  >
                    New
                  </h3>
                  <h3
                    onClick={() => filtercategory("featured")}
                    className="uppercase mr-2.5 text-black text-sm cursor-pointer hover:text-red-600 duration-75"
                  >
                    Featured
                  </h3>
                  <h3
                    onClick={() => filtercategory("topselling")}
                    className="uppercase mr-2.5 text-black text-sm cursor-pointer hover:text-red-600 duration-75"
                  >
                    Top selling
                  </h3>
                </div>
              </div>
              <div className="max-w-full">
                <div className="w-full flex flex-wrap gap-5 justify-between items-center mt-2 ">
                  {trending.map((obj) => {
                    return (
                      <div
                        key={obj.id}
                        className="w-52 h-80 p-5 border-2 border-stone-300 bg-slate-100 overflow-hidden rounded-md "
                      >
                        <div className="w-48 h-48 object-cover flex -ml-3.5">
                          <img
                            className="w-full h-auto object-cover rounded"
                            src={obj.image}
                            alt=""
                          />
                          <div className="flex flex-col -ml-10 -mt-2 gap-3">
                            <div className="bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition">
                              <AiFillEye />
                            </div>
                            <div className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition">
                              <AiFillHeart />
                            </div>
                          </div>
                        </div>
                        <div className="p-1.5 ml-2.5 ">
                          <h3 className="text-xl font-bold mb-1">{obj.name}</h3>
                          <p className="text-red-600 font-semibold mb-1">
                            ${obj.price}
                          </p>
                          <button className="w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button className="ml-80 mt-5 tertiary-btn">Show More</button>
              </div>
            </div>
            {/* <div className="py-5 px-2.5 w-1/4">
              <div className="max-w-full border-2 border-stone-300">
                <div className="w-full p-2.5 bg-stone-200">
                  <h3 className="text-center text-black text-lg uppercase font-semibold mt-2.5 tracking-wide">Our Testimonials</h3>
                </div>
                <div className="p-2.5">
                  <div className="rounded-full h-16 w-16">
                    <img className="ml-20 mt-20" src={person1} alt="testimonial"/>
                  </div>
                  <div className="mt-2.5 ">
                    <h3 className=" text-center text-lg font-medium uppercase text-black">Stephanie jackson</h3>
                    <h4 className="text-center text-sm mt-2.5 text-red-600 font-semibold uppercase">Web designer</h4>
                    <p className="mt-2.5 text-center text-sm text-black font-semibold mb-5">Lorem ipsum dolor, sit amet consectetur alias consequuntur deleniti corporis.</p>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <Newsletter/>
              </div>
            </div> */}
          </div>
        </div>
        <div className="banners">
          <Banner />
          <Banner2 />
          <Testimonial />
        </div>
      </div>
      {/* <Hero/>
      <Brands/>
      <Banner/>
      <Banner2/>
      <Services/>
      <Newsletter/>
      <Testimonial/> */}
    </>
  );
}
