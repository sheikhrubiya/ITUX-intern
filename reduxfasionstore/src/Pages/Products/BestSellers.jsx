import React from "react";
import Data from "../../Data/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BestSellers = () => {
  const newData = Data.filter((x) => x.type === "featured");
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
    <div className="flex flex-col gap-5 mt-5">
      <div className="h-40 w-full items-center mt-5">
        <h1 className="text-xl font-semibold text-black rounded-md h-10 text-center py-2">
          Best Sellers
        </h1>
        <p className="text-md font-normal text-black text-center w-3/5 ml-60">Looking to buy furniture online? Check out our top-selling furniture, from bedroom sets to cozy sofas. Order from our furniture store online with ease.</p>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
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
        {newData.map((obj) => (
          <div className="w-60 h-40 flex gap-0 px-5 " key={obj.id}>
            <img
              src={obj.image}
              alt={obj.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BestSellers;
