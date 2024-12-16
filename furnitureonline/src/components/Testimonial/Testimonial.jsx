import React from 'react'
import person1 from '../../assets/person/1.jpg'
import person2 from '../../assets/person/2.jpg'
import person3 from '../../assets/person/3.jpg'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SlideUp } from '../../animation/animation'
const TestimonialData = [
  {
    id:1,
    name:"John Doe",
    img:person1,
    designation:"CEO",
    text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit consequuntur officia et autem ducimus temporibus deserunt molestiae quod omnis! Adipisci a omnis aliquid, eligendi repudiandae commodi? Laboriosam fugiat possimus dolorum?",
    delay:0.2,
  },
  {
    id:2,
    name:"Peter",
    designation:"Manager",
    img:person2,
    text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit consequuntur officia et autem ducimus temporibus deserunt molestiae quod omnis! Adipisci a omnis aliquid, eligendi repudiandae commodi? Laboriosam fugiat possimus dolorum?",
    delay:0.4
  },
  {
    id:3,
    name:"George",
    designation:"Developer",
    img:person3,
    text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit consequuntur officia et autem ducimus temporibus deserunt molestiae quod omnis! Adipisci a omnis aliquid, eligendi repudiandae commodi? Laboriosam fugiat possimus dolorum?",
    delay:0.6
  },
]
const Testimonial = () => {
  return (
    <div className='py-10'>
      {/* heading title */}
      <motion.div variants={SlideUp(0.2) } initial="initial" whileInView={"animate"}  className='space-y-2 text-center max-w-[500px] mx-auto mb-8'>
         <motion.h1 variants={SlideUp(0.2) } initial="initial" whileInView={"animate"}  className='text-3xl font-bold font-serif'>Words from our customers</motion.h1>
         <motion.p variants={SlideUp(0.2) } initial="initial" whileInView={"animate"}  className='text-gray-500 text-sm max-w-[350px] mx-auto'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, necessitatibus aliquam mollitia minus provident excepturi? Omnis numquam saepe tenetur necessitatibus, quisquam quod consequatur rerum dolore perferendis facilis aperiam, ipsa quam!
         </motion.p>

      </motion.div>
      {/* Testimonial cards */}
      <div className='bg-black p-12'>
      <div className='container grid grid-cols-1 md:grid-cols-3 gap-10'>
         {
          TestimonialData.map((card)=>{
               return (
                <div key={card.id} className='bg-red-100 border-[1px] border-gray-500 p-5 text-black group-hover:bg-white hover:text-black duration-300'>
                    {/* upper section */}
                    <div className='flex flex-row items-center gap-3'>
                      <img src={card.img} alt='' className='w-16 h-16 rounded-[100%]'/>
                      <div>
                      <h1 className='text-sm font-bold group-hover:text-black'>{card.name}</h1>  
                      <p className='text-gray-500 text-xs group-hover:text-black'>{card.designation}</p>
                      </div>
                      <div className='flex flex-row text-xs mt-2'>
                      <FaStar /><FaStar /><FaStar />
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className='mt-5 border-t-2 border-gray-500/40 pt-5'>
                      <p className='text-sm text-gray-500 group-hover:text-black duration-300'>{card.text}</p>
                    </div>
                </div>
               )
          })
         }
      </div>
      </div>
    </div>
  )
}

export default Testimonial