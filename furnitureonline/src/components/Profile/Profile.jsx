import React from "react";
import user from "../../assets/person/5.jpg";
import { NavLink } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <div className="flex p-5 gap-5 border-2 border-[#A47056] bg-[#f3d5bf]">
        <img className="h-10 w-10 rounded-full" src={user} alt="user-image" />
        <div className="flex p-0 gap-1 flex-col">
          <h3 className="text-lg font-semibold">Rubiya Banoo</h3>
          <p className="text-sm">Email :sheikhrubiyza1409@gmail.com</p>
          <p className="text-sm">Number: 9910850854</p>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2">
        <NavLink>
          <h2>Your Orders</h2>
        </NavLink>
        <NavLink>
          <h2>Account</h2>
        </NavLink>
        <NavLink>
          <h2>Profile Details</h2>
        </NavLink>
      </div>
      <div className="p-5">
        <NavLink>
          <button className="primary-btn">LogOut</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
