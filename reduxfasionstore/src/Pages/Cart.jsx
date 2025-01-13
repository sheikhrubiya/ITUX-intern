import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const CartPage = ({ Cart, setCart}) => {

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

  const decqty = (obj)=>{
    const exist = Cart.find((x)=>x.id===obj.id)
    setCart(Cart.map((x)=>x.id===obj.id?{...exist, qty:exist.qty-1}:obj))
  }

  const removeqty= (obj)=>{
    const exist = Cart.find((x)=>x.id===obj.id)
    setCart(Cart.map((x)=>x.id!==obj.id))
  }
  return (
    <div>
      <h1 className="text-center text-lg font-semibold">Your Cart</h1>

      {Cart.length > 0 ? (
        Cart.map((obj) => (
          <div className="py-2 border-b-2 border-slate-400 w-[1200px] flex flex-col gap-2 mt-2" key={obj.id}>
            <div className="flex flex-row gap-10 ml-10">
              <div className="w-40 h-40  mt-2">
                <img className="h-40" src={obj.image} />
              </div>
              <div className="w-80 mt-4">
                <p className="text-md font-semibold">{obj.name}</p>
                <p className="text-sm">{obj.description.substring(0,85)}</p>
                <p className="text-lg font-bold text-red-600">$ {obj.price}</p>
                <div className="mt-4 flex flex-row gap-2">
                  <button className="border-2 border-black w-8 rounded-md">xl</button>
                  <button className="border-2 border-black w-8 rounded-md">lg</button>
                  <button className="border-2 border-black w-8 rounded-md">md</button>
                  <button className="border-2 border-black w-8 rounded-md">sm</button>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex flex-row gap-0">
                  <button className="p-2 text-4xl font-semibold text-red-600" onClick={()=>incqty(obj)}><CiCirclePlus/></button>
                  <input type="number" className="border-2 border-amber-900 rounded-lg w-20 px-5 text-center" value={obj.qty} />
                  <button className="p-2 text-4xl font-semibold text-red-600" onClick={()=>decqty(obj)}><CiCircleMinus/></button>
                </div>
                <div className="items-center ml-10">
                  <button className="w-20 h-8 border-2 border-slate-400 rounded-md" onClick={()=>removeqty(obj)}>Remove</button>
                  <p className="text-lg font-semibold text-red-500">Total: ${obj.price * obj.qty}</p>
                </div>
              </div>
            </div>
          </div>
        ))
        
      ) : (
        <div className="flex flex-col p-10 w-full h-full item-center">
          <p className="text-center text-lf font-serif">Your shopping cart is empty</p>
          <div className="border-2 border-black bg-white text-black hover:bg-black hover:text-white w-20 h-8">
          <NavLink to={'/furniture'}>
            Shop Now
          </NavLink>
          </div>
        </div>
      )}
      <div className="w-full h-60 p-10 items-center flex flex-col gap-5">
         <p>Grand Total:</p>
         <button className="w-40 h-8 text-lg font-semibold border-2 border-white bg-red-600 text-white rounded-md hover:bg-white hover:text-red-600 hover:border-red-600">Check Out</button>
      </div> 
    </div>
  );
};

export default CartPage;
