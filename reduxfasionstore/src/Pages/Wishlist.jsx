import React from "react";

const Wishlist = ({ wishlist }) => {
  return (
    <div className="p-5 flex flex-col gap-2">
      <h1 className="text-xl font-bold">My Wishlist</h1>
      <p className="text-md font-light">
        Save your favorite items and purchase them later.
      </p>
      <div className=" ">
        <div class="border-b-2">
          {wishlist.map((item) => (
            <div class="px-10 py-2 flex flex-col gap-2">
              <img
                src={item.image}
                alt="Product Name"
                className="w-60 h-40 rounded-md"
              />
              <div class="flex flex-col gap-2 w-[400px]">
                <h3 className="font-medium">{item.name}</h3>
                <p>{item.description}</p>
                <p className="text-lg text-red-600">${item.price}</p>
                <div className="flex flex-row gap-2">
                  <button class="border-2 border-black w-40 h-8 rounded-md hover:text-white hover:bg-black">
                    Move to Cart
                  </button>
                  <button class="border-2 border-black w-40 h-8 rounded-md hover:text-white hover:bg-black">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="flex flex-row gap-2 ml-10">
        <button class="border-2 border-black w-40 h-8 rounded-md hover:text-white hover:bg-black">
          Move All to Cart
        </button>
        <button class="border-2 border-black w-40 h-8 rounded-md hover:text-white hover:bg-black">
          Share Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
