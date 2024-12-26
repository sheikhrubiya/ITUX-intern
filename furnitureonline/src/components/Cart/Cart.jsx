import { div } from "framer-motion/client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  // increase qty
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((obj) => {
        return obj.id === product.id ? { ...exist, qty: exist.qty + 1 } : obj;
      })
    );
  };
 //decreasing qty
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((obj) => {
        return obj.id === product.id ? { ...exist, qty: exist.qty - 1 } : obj;
      })
    );
  };
//removing product
  const removeproduct=(product)=>{
      const exist = cart.find((x)=>{
         return x.id === product.id
      })
      if(exist.qty>0)
      {
        setCart(cart.filter((obj)=>{
           return obj.id !== product.id
        }))
      }
  }
  
//total price 
   const total = cart.reduce((price, item)=> price + item.qty*item.price, 0)

  return (
    <>
      <div className="m-0 p-0 font-sans box-border">
        <div className="w-full p-5">
          <h3 className="text-2xl uppercase text-black tracking-wider font-semibold">
            Your Cart
          </h3>
          {cart && cart.length === 0 && (
            <>
              <div className="w-full items-center ml-40">
                <h2 className="mr-80 text-center uppercase text-lg text-black tracking-wide font-bold">
                  Your Shopping cart is empty
                </h2>
                <Link to="/products">
                  <button className="mt-10 ml-80 w-32 bg-[#8A624A] text-white py-2 rounded hover:bg-[#c17e57] transition">
                    Shop Now
                  </button>
                </Link>
              </div>
            </>
          )}
          <div className="max-w-full px-2.5 py-5">
            {cart && cart.length > 0 ? (
              cart.map((obj) => (
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

                    <div className="mt-16 ml-8 flex h-5">
                      <button
                        onClick={() => incqty(obj)}
                        className="tertiary-btn"
                      >
                        +
                      </button>
                      <input
                        className="h-8 px-5 py-2.5 bg-none outline-none border-2 border-yellow-400 text-red-600 text-lg font-bold w-24"
                        type="number"
                        value={obj.qty}
                      />
                      <button
                        onClick={() => decqty(obj)}
                        className="tertiary-btn"
                      >
                        -
                      </button>
                    </div>
                    <div className="mt-2 ml-10">
                      <li onClick={()=>removeproduct(obj)} className="list-none p-2.5 mt-14 bg-red-600 text-white text-sm font-bold cursor-pointer ">
                        <AiOutlineClose />
                      </li>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No data found!!</div>
            )}
          </div>
        </div>
        <div className="bottom">
          {
            cart.length > 0 && 
            <div className="ml-8">
            <div className="total">
              <h4 className="text-xl text-red-700 uppercase font-semibold">Sub Total: ${total}</h4>
            </div>
            <div className="mt-4">
              <button className="border-2 border-green-900 bg-green-700 rounded-lg text-white text-lg font-semibold p-2.5 w-36 h-14 cursor-pointer">CheckOut</button>
            </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Cart;
