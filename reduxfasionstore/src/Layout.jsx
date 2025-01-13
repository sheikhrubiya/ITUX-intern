import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({search, setSearch, searchProduct}) => {
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} searchProduct={searchProduct}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout