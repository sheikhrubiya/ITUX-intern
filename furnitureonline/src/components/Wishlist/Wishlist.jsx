import React from "react";
import image from "../../assets/furnitures/bed.jpg";
import { FaStar } from "react-icons/fa";
import { div } from "framer-motion/client";
import { AiOutlineClose } from "react-icons/ai";
const Wishlist = ({ wishlist, setWishlist }) => {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-lg mt-10">Your WishList</h3>
      <div class="mx-auto container gap-5 px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
        <div>
          {wishlist && wishlist.length > 0 ? (
            wishlist.map((obj) => (
              <div className="flex w-full border-b-2  border-gray-300">
                <div className="img_box">
                  <img className="w-40 h-40 p-2.5" src={obj.image} alt="" />
                </div>
                <div className="w-full flex p-2.5 gap-5 ml-8">
                  <div className="mt-5 ml-7">
                    <h4 className="uppercase text-sm text-gray-400">
                      {obj.category}
                    </h4>
                    <h3 className="mt-2.5 text-black text-lg uppercase tracking-wide font-bold">
                      {obj.name}
                    </h3>
                    <p className="mt-2.5 text-black uppercase">
                      Price: ${obj.price}
                    </p>
                    <p className="">Total: ${obj.price * obj.qty}</p>
                  </div>

                  <div className=" flex flex-col gap-5">
                    <button
                      onClick={() => removeproduct(obj)}
                      className="border-2 border-green-900 bg-red-700 rounded-lg text-white text-lg font-semibold py-0.5 w-20 h-10 cursor-pointer"
                    >
                      Remove
                    </button>
                    <button className="border-2 border-green-900 bg-green-700 rounded-lg text-white text-lg font-semibold py-0.5 w-20 h-10 cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No data found!!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
