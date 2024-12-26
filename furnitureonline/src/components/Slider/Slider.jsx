import React, { useState } from "react";
import banner1 from "../../assets/banner4.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner7.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider({ deviceType }) {
  const responsive = {
    superLargeDesktop: {
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
    <div className="w-[97%] md:w-[97%] mx-auto z-10 mt-5">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="h-[200px] md:h-[370px]">
          <img
            src={banner1}
            alt="banner 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="h-[200px] md:h-[370px]">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="h-[200px] md:h-[370px]">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </Carousel>
    </div>
  );
}
