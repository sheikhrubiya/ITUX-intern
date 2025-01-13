import React from 'react'
import Anouncement from '../Components/Anouncement'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import NewArrivals from './Products/NewArrivals'
import BestSellers from './Products/BestSellers'
import Products from './Products/Products'
import Footer from '../Components/Footer'
import Featured from '../Components/Featured'

const Home = () => {
  return (
    <div>
      <Anouncement/>
      <Slider/>
      <Categories/>
      <NewArrivals/>
      <BestSellers/>
      <Featured/>
    </div>
  )
}

export default Home