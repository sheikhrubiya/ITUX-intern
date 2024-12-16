import React from 'react'
import hero from "../../assets/hero.jpg";
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animation';
const Hero = () => {
  return (
    <>
     <div className='container bg-'>
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px] gap-10">
          {/* Text Section */}
           <div className='flex flex-col justify-center gap-5 md:pr-8 lg:pr-14 text-center md:text-left pt-20 md:pt-0 px-10'>
           <motion.h1 variants={SlideUp(0.2) } initial="initial" animate="animate" className='text-5xl font-bold'>Premium Wooden Furnitures</motion.h1>
           <motion.p variants={SlideUp(0.5) } initial="initial" animate="animate" className='text-sm text-gray-500'>
           Custom furniture manufacturer. Creating personalized solutions for your space involves a partnership with one of our innovative designers.
           </motion.p>
            <div className='space-x-4'>
            <motion.button variants={SlideUp(0.5) } initial="initial" animate="animate" className='primary-btn uppercase bg-black text-white hover:bg-white hover:text-black'>Get Started</motion.button>
            <motion.button variants={SlideUp(0.75) } initial="initial" animate="animate" className='primary-btn uppercase'>Contact Us</motion.button>
            </div>
           </div>
          {/* Image Section */}
          <div className='flex flex-col items-center justify-center '>
            <motion.img initial={{x:100, opacity:0}} animate={{ x:0, opacity:1}} src={hero} transition={{ duration:0.5, delay:0.2}} className=''/>
          </div>
        </div>     
     </div> 
    </>
  )
}

export default Hero