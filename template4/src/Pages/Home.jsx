import React from 'react'
import Anouncement from '../Components/Anouncement'
import Category from '../Components/Category'
import Banner from '../Components/Banner'
import Flatsale from '../Components/flatsale'
import Newarrivals from '../Components/Newarrivals'
import TopSelling from '../Components/TopSelling'
import Livingroom from '../Components/Livingroom'
import Bedroom from '../Components/Bedroom'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div className=' w-full'>
      <Anouncement/>
      <Category/>
      <Banner/>
      <Flatsale/>
      <Newarrivals/>
      <TopSelling/>
      <Livingroom/>
      <Bedroom/>
      <Testimonials/>
    </div>
  )
}

export default Home