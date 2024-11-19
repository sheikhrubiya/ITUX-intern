import React, { useState } from "react";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex">
      <div className={`w-25 md:w-72 bg-slate-800 transition-colors duration-300 text-stone-200 ${isOpen ? "w-72" : "w-25"}`}>
        <div className="flex justify-between items-center bg-slate-950 p-4 px-4">
          <h2 className={`text-2xl font-bold hidden md:block ${isOpen ? "block" : "hidden"}`}>
            Admin <strong>One</strong>
          </h2>
          <button className="block md:hidden" onClick={()=>
            setIsOpen(!isOpen)
          }>{isOpen ?<IndeterminateCheckBoxOutlinedIcon/> : <CheckBoxOutlinedIcon/>}</button>
        </div>
        <nav className="mt-1">
          <div className="p-4 text-2xl font-light">
            <h2>General</h2>
          </div>
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <DesktopWindowsOutlinedIcon size={24} />
              <span className="ml-4 hidden md:block text-xl font-semibold">Dashboard</span>
            </li>
          </ul>
          <div className="p-4 text-2xl font-light">
            <h2>Examples</h2>
          </div>
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <TableViewOutlinedIcon size={24} />
              <span className="ml-4 hidden md:block text-xl font-semibold">Table</span>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <InsertDriveFileOutlinedIcon size={24} />
              <span className="ml-4 hidden md:block text-xl font-semibold">Forms</span>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <AccountBoxOutlinedIcon size={24} />
              <span className="ml-4 hidden md:block text-xl font-semibold">Profile</span>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <LockOpenOutlinedIcon size={24} />
              <span className="ml-4 hidden md:block text-xl font-semibold">Login</span>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <TocOutlinedIcon size={24} />
              <span className="ml-4 mr-7 hidden md:block text-xl font-semibold">Submenus</span>
              <ExpandCircleDownOutlinedIcon/>
            </li>
          </ul>
          <div className="p-4 text-2xl font-light">
            <h2>About</h2>
          </div>
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <HelpOutlineOutlinedIcon size={24} />
              <span className="ml-4 hidden md:block text-xl font-semibold">About</span>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
              <EngineeringOutlinedIcon size={24} />
              <span className="ml-4 hidden md:block text-xl font-semibold">GitHub</span>
            </li>
          </ul>
        </nav>
      </div>
      <div>Homepage</div>
    </div>
  );
}

export default Sidebar;
