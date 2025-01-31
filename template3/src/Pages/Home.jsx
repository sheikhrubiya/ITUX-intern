import React from "react";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import TopSelling from "../Components/TopSelling";
import Newarrivals from "../Components/Newarrivals";
import Section1 from "../Components/Section1";
import Testimonials from "../Components/Testimonials";
import image from '../assets/background_image.jpg'
import Anouncement from "../Components/Anouncement";
import Testimonialsnew from "../Components/Testimonialsnew";
const Home = () => {
  
  return (
    <div className="w-full h-full bg-gray-100">
      <Anouncement/>
      <Slider/>
      <Categories/>
      <TopSelling/>
      <Section1/>
      <Newarrivals/>
      <Testimonialsnew/>
    </div>
  );
};

export default Home;
