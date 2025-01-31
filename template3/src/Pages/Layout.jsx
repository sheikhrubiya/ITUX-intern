import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = ({search,setSearch,searchProduct}) => {
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} searchProduct={searchProduct}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
