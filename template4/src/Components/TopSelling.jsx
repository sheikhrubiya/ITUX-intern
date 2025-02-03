import React from "react";
import Data from "../Data/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";

const TopSelling = () => {
  const newData = Data.filter((x) => x.type === "topselling");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="flex flex-col gap-5 mt-5 px-5">
      <div className="h-10 w-full items-center mt-5 border-b-2">
        <h1 className="text-xl font-semibold text-black rounded-md h-4 text-left py-2">
          Best Sellers
        </h1>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
      >
        {newData.map((obj) => {
          const discountedPrice =
            obj.price * (1 - obj.discountPercentage / 100);

          return (
            <div
              className=" w-[280px] h-[250px] flex gap-6 rounded-md border-2 border-gray-500 px-2 relative shadow-lg shadow-gray-400 bg-white ml-1"
              key={obj.id}
            >
              <div className="relative flex flex-col">
                <div className="w-[276px] -ml-[8px] relative">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    className="w-full h-[190px] object-cover rounded-md relative"
                  />
                  <p className="text-white absolute top-0 left-0 bg-red-500 rounded-tl-sm rounded-br-lg px-2">New Arrivals</p>
                </div>

                <div className="absolute top-[165px] rounded-md left-2 w-28 h-6 bg-white flex flex-row px-2 gap-1">
                  <p>{obj.rating}</p>
                  <span className="mt-1 text-amber-400">
                    <FaStar />
                  </span>
                  <p className="text-gray-400">|</p>
                  <p className="text-gray-400">{obj.reviews} reviews</p>
                </div>
                <div className="text-center text-xl font-light">{obj.name}</div>
                <div className="flex flex-row justify-between px-4">
                  <p className="text-lg -mt-2">${obj.price*(2/5)}</p>
                  <p className="line-through text-gray-500">${obj.price}</p>
                  <p className="text-sm text-green-800">
                    40% OFF
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopSelling;
