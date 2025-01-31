import { div } from "framer-motion/client";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const CartPage = ({ Cart, setCart }) => {
  
  const incqty = (product) => {
    const exist = Cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      Cart.map((obj) => {
        return obj.id === product.id ? { ...exist, qty: exist.qty + 1 } : obj;
      })
    );
  };

  const decqty = (obj) => {
    const exist = Cart.find((x) => x.id === obj.id);
    setCart(
      Cart.map((x) =>
        x.id === obj.id ? { ...exist, qty: exist.qty - 1 } : obj
      )
    );
  };

  const removeqty = (obj) => {
    const exist = Cart.find((x) => x.id === obj.id);
    setCart(Cart.map((x) => x.id !== obj.id));
  };
  return (
    <div className="bg-gray-100 flex flex-col">
      <h1 className="text-center text-2xl font-semibold">Your Cart</h1>
      <div className="flex flex-row gap-4">
        <div></div>
        <div className="w-3/4 bg-white">
          {Cart.length > 0 ? (
            Cart.map((obj) => (
              <div className="flex flex-row">
                <div className="w-1/12 ml-10 mt-20">
                  <input type="checkbox" className="text-xl" />
                </div>
                <div
                  className="py-2 border-b-2 border-slate-200 -ml-10 w-full flex flex-col gap-2 mt-2"
                  key={obj.id}
                >
                  <div className="flex flex-row gap-10 ml-10">
                    <div className="w-40 h-40  mt-2">
                      <img className="h-40" src={obj.image} />
                    </div>
                    <div className="w-80 mt-4">
                      <p className="text-md font-semibold uppercase">
                        {obj.name}
                      </p>
                      <p className="text-green-800 text-xs font-semibold">
                        In Stock
                      </p>
                      <p className="text-xs">Eligible for FREE shipping</p>
                      <div className="flex flex-row gap-2">
                        <p className="text-sm font-semibold">Size:</p>
                        <p className="text-sm">King</p>
                      </div>

                      <p className="text-sm">
                        {obj.description.substring(0, 85)}
                      </p>
                      <div className="flex flex-row gap-2 text-sm">
                        <p className="text-sm">Qty: 1 | </p>
                        {/* <button
                        className="w-20 h-8 border-2 border-slate-400 rounded-md"
                        onClick={() => removeqty(obj)}
                      >
                        Remove
                      </button> */}
                        <IoTrashOutline
                          className="mt-1"
                          onClick={() => removeqty(obj)}
                        />
                        <div className="text-blue-800">
                          <NavLink>| See more like this | </NavLink>
                          <NavLink>Share</NavLink>
                        </div>
                      </div>
                      {/* <div className="mt-4 flex flex-row gap-2">
                  <button className="border-2 border-black w-8 rounded-md">xl</button>
                  <button className="border-2 border-black w-8 rounded-md">lg</button>
                  <button className="border-2 border-black w-8 rounded-md">md</button>
                  <button className="border-2 border-black w-8 rounded-md">sm</button>
                </div> */}
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                      <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                          <p className="text-orange-600 text-lg">-40%</p>
                          <p className="mt-0.5">
                            Rs {Math.round(obj.price * (2 / 5))}
                          </p>
                        </div>
                        <p className="text-xs line-through ">
                          mrp:. $ {obj.price}
                        </p>
                      </div>
                      <div className="flex flex-row gap-0">
                        <button
                          className="px-2 text-lg font-semibold -mt-0.5"
                          onClick={() => incqty(obj)}
                        >
                          <CiCirclePlus />
                        </button>
                        <input
                          type="number"
                          className="border-2 border-gray-500 rounded-lg w-10 h-6 text-center"
                          value={obj.qty}
                        />
                        <button
                          className="px-2 text-lg font-semibold -mt-0.5"
                          onClick={() => decqty(obj)}
                        >
                          <CiCircleMinus />
                        </button>
                      </div>
                      <div className=" flex flex-row gap-2 items-center ml-10">
                        <p className="">Total:</p>
                        <p className="text-sm font-semibold text-green-700">
                          ${obj.price * obj.qty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col p-10 w-full h-full item-center">
              <p className="text-center text-lf font-serif">
                Your shopping cart is empty
              </p>
              <div className="border-2 border-black bg-white text-black hover:bg-black hover:text-white w-20 h-8">
                <NavLink to={"/furniture"}>Shop Now</NavLink>
              </div>
            </div>
          )}
        </div>
        <div className="w-1/4 bg-white flex flex-col p-2">
          <div className="flex flex-row gap-2">
            <div className="w-60 h-4 bg-green-700 rounded-2xl mt-1"></div>
            <p>$ 5</p>
          </div>
          <div className="flex flex-row gap-2">
            <span className="text-green-700 mt-1">
              <FaCircleCheck />
            </span>
            <p className=" text-green-700 text-xs">
              Your order is eligible for FREE delivery.
            </p>
          </div>
          <p className="text-xs ml-2">
            Please choose free delivery option while checkout.
          </p>
          <div className="w-full h-40 px-10 py-5 items-center flex flex-col gap-5">
            <div className="flex flex-row gap-3">
              <p className="font-semibold">Grand Total:</p>
              <p>Rs 5000/-</p>
            </div>
            <button className="w-60 h-8 text-lg font-semibold border-2 border-white bg-amber-400 text-black rounded-2xl hover:bg-white hover:text-amber-400 hover:border-amber-400">
              Check Out
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
