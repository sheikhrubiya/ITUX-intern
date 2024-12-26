import React from "react";
import image from "../assets/banner.jpg";
import { MdMailOutline } from "react-icons/md";
import { RiCheckboxBlankCircleLine, RiLockPasswordFill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Signin = ({isAuthenticate, setisAuthenticated}) => {
  const navigate = useNavigate();

   const handleSubmit =function (){
        navigate("/");
        setisAuthenticated(true);
   }
  return (
    <div className="max-w-full h-[720px]">
      <div className="flex">
        <div className="w-[50%]">
          <img className="h-[720px]" src={image} alt="signin image"></img>
        </div>
        <div className="w-[50%] bg-[#E4D5CE]">
          <div className="ml-40 mt-40">
            <div className="text-white text-xl font-serif ml-14">
              <h1 className="text-2xl">User-Login</h1>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="text-2xl">
                <MdMailOutline />
              </div>
              <div className="">
                <input
                  className="rounded-md border-[#6C442A] border-2 px-2"
                  type="text"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="text-2xl">
                <RiLockPasswordFill />
              </div>
              <div className="input">
                <input
                  className="rounded-md border-[#6C442A] border-2 px-2"
                  type="text"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="flex mt-5 gap-10">
              <div className="flex gap-1">
                <RiCheckboxBlankCircleLine className="mt-1" />
                <p>Remember Password</p>
              </div>
              <div className="hover:text-pink-700">
                <NavLink to={"/reset"}>Forgot Password</NavLink>
              </div>
            </div>
            <div className="flex mt-5 gap-10 ml-10">
              <div>
                <button onClick={handleSubmit()}
                  className="border-2 border-[#6C442A] rounded-lg px-2 text-amber-950 bg-[#C8B4B7] hover:bg-white hover:text-black"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div>
                <NavLink to={"/signup"}>
                  <button className="border-2 border-[#6C442A] rounded-lg px-2 text-amber-950 bg-[#C8B4B7] hover:bg-white hover:text-black">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
