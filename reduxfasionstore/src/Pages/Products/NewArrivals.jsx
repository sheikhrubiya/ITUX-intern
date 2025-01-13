import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "../../Data/Data";
import image from "../../assets/newarrival.jpg";
const NewArrivals = ({deviceType}) => {
  const newData = Data.filter((x) => x.type === "topselling");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5, // Adjusted to show 5 items
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5, // Adjusted to show 5 items
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="h-40 w-full items-center">
        <h1 className="text-xl font-semibold text-black rounded-md h-10 text-center py-2">
          New Arrivals
        </h1>
        <p className="text-md font-normal text-black text-center w-3/5 ml-60">Discover the newest home furniture and decor arrivals at Gulmohar Lane. Explore fresh and stylish pieces to elevate your living space.Shop the latest new arrivals furniture and decorate your dream home & office. Designer furniture is waiting for you to take home.</p>
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        autoplay={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
      >
        {newData.map((obj) => (
          <div className="w-60 h-40 flex gap-0 px-2" key={obj.id}>
            <img
              src={obj.image}
              alt={obj.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </Carousel>
      <div
        className="w-full h-[400px] rounded-md"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="text-5xl font-medium text-white ml-[400px] mt-[200px]">
          Coming soon
        </p>
      </div>
    </div>
  );
};

export default NewArrivals;
