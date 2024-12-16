import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Signin = () => {

  


  return (
    <div className="max-w-full">
      <div className="header">
        <div className="text-2xl text-center text-blue-950 ">Sign Up</div>
        <div className="bottom-2 border-black"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-5 mt-2.5">
          <FaUserPlus />
          <input
            className="border-2 p-2 w-60 h-8 border-stone-300"
            placeholder="Enter Username"
            type="text"
          />
        </div>
        <div className="flex flex-row gap-5 mt-2.5">
          <MdOutlineMail />
          <input
            className="border-2 w-60 h-8 p-2 border-stone-300"
            placeholder="Enter email ID"
            type="text"
          />
        </div>
        <div className="flex flex-row gap-5 mt-2.5 ">
          <RiLockPasswordFill />
          <input
            className="border-2 p-2 w-60 h-8 border-stone-300 "
            type="text"
            placeholder="Enter your password.."
          />
        </div>
        <div className="ml-10 mt-5 gap-5">
         
          <button className="tertiary-btn bg-blue-800 text-white" type="submit">
            Login
          </button>
        </div>

        <div className=" flex flex-row gap-5 mt-5 ml-14">
          <h4>Forgot Password?</h4>
          <h3 className="cursor-pointer text-blue-900 hover:text-red-900">
            Click here
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signin;
