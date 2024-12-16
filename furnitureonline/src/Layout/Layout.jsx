import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const Layout = ({search, setSearch, searchProduct}) => {
  return (
    <>
      <Navbar search={search} setSearch={setSearch} searchProduct={searchProduct}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout