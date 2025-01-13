import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
const Slider = ({deviceType}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full md:w-[97%] mx-auto z-10 mt-5">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="h-[200px] md:h-[370px] relative">
          <img
            src={image1}
            alt="image2"
            className="w-full h-full bg-center rounded-md"
          />
          <h1 className="text-2xl absolute bottom-40 left-40 z-10 font-normal text-white">
            Outdoor Collection
          </h1>
          <p className="font-sans text-white text-5xl absolute bottom-28 left-40 z-10 font-bold">Decked Out in Joy</p>
          <button className="border-2 border-gray-200 rounded-md bg-white text-black font-bold absolute bottom-10 left-40 z-10 w-24 h-8">Shop Now</button>
        </div>
        <div className="h-[200px] md:h-[370px] relative">
          <img
            src={image2}
            alt="image2"
            className="w-full h-full bg-center rounded-md"
          />
          <h1 className="text-2xl absolute bottom-40 left-40 z-10 font-normal text-white">
            Apartment Living
          </h1>
          <p className="font-sans text-white text-5xl absolute bottom-28 left-40 z-10 font-bold">Small Space Sparkle</p>
          <button className="border-2 border-gray-200 rounded-md bg-white text-black font-bold absolute bottom-10 left-40 z-10 w-24 h-8">Shop Now</button>
        </div>
        <div className="h-[200px] md:h-[370px] relative">
          <img
            src={image3}
            alt="image2"
            className="w-full h-full bg-center rounded-md"
          />
          <h1 className="text-2xl absolute bottom-40 left-40 z-10 font-normal text-white">
            Design Talk
          </h1>
          <p className="font-sans text-white text-5xl absolute bottom-28 left-40 z-10 font-bold">Unwrap the Gift of Free Design</p>
          <button className="border-2 border-gray-200 rounded-md bg-white text-black font-bold absolute bottom-10 left-40 z-10 w-24 h-8">Shop Now</button>
        </div>
        <div className="h-[200px] md:h-[370px] relative">
          <img
            src={image4}
            alt="image2"
            className="w-full h-full bg-center rounded-md"
          />
          <h1 className="text-2xl absolute bottom-40 left-40 z-10 font-normal text-white">
            Apartment Living
          </h1>
          <p className="font-sans text-white text-5xl absolute bottom-28 left-40 z-10 font-bold">Small Space Sparkle</p>
          <button className="border-2 border-gray-200 rounded-md bg-white text-black font-bold absolute bottom-10 left-40 z-10 w-24 h-8">Shop Now</button>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
