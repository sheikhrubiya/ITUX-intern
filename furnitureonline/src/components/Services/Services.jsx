import React from 'react'
import { BiSolidDollarCircle } from 'react-icons/bi'
import { FaVectorSquare } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'
import { delay, motion } from 'framer-motion'
import { SlideUp } from '../../animation/animation'
const ServiceCard = [
  {
    id:1,
    title:"Luxury Furnitures",
    description:"Elite class premium furnitures with seasoned wood and ultra comfortable cusions.lorem",
    icon:<FaVectorSquare/>,
    link:"#",
    delay:0.2,
  },
  {
    id:2,
    title:"Quality Products",
    description:"Seasoned wood with exclusive crafting and modern design.",
    icon:<FaPenToSquare/>,
    link:"#",
    delay:0.4,
  },
  {
    id:3,
    title:"Affordable Price",
    description:"Price that suits your budget and pocket.",
    icon:<BiSolidDollarCircle/>,
    link:"#",
    delay:0.6,
  }
]
const Services = () => {
  return (
    <div>
      <div className="container py-20">
      {/* Heading-title */}
      <div className='space-y-3 text-center max-w-[350px] mx-auto mb-8'>
        <motion.h1 variants={SlideUp(0.2) } initial="initial" whileInView={"animate"} className='text-3xl font-bold font-serif'>Whatwe provide</motion.h1>
        <motion.p variants={SlideUp(0.4) } initial="initial" whileInView={"animate"} className='text-gray-500 text-sm'>Bring your dream home to life with one-on-one designed furnitures.</motion.p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* card section */}
          {
            ServiceCard.map((card)=>{
                return <motion.div variants={SlideUp(card.delay) } initial="initial" whileInView={"animate"}  key={card.id} className='space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[3px_3px_0px_0px_gray] duration-300'>
                  <span className='inline-block text-xl border-[1px] border-black rounded-full p-2'>
                    {card.icon}
                  </span>  
                  <p className='text-2xl font-bold font-serif'>{card.title}</p> 
                  <p className='text-gray-500 text-xs'>{card.description}</p>
                  <a href={card.link} className='border-b
                  border-black inline-block'>Learn More</a>
                </motion.div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services