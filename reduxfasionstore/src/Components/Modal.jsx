import React, { useState } from 'react'
import image from '../assets/image10.jpeg'
import { FaCross, FaStar } from 'react-icons/fa'
import { IoIosCloseCircleOutline } from 'react-icons/io'
const Modal = ({detail, handleOpenModal}) => {
  console.log(detail)
  return (
    <div className='absolute top-16 left-80 w-[600px] h-[400px] bg-[#FFF1DB] z-50 rounded-md p-2 flex flex-row'>
    <div className='w-[98%] flex flex-col gap-2'>
         <img src={detail.image} className='w-60 h-40'/>
         <p className='text-lg font-semibold'>{detail.name}</p>
         <div className='flex flex-row gap-2 align-middle'>
         <span className='flex flex-row text-amber-400'><FaStar/><FaStar/><FaStar/></span>
         <p className='text-sm font-extralight'>23 reviews</p>
         </div>
         <p className='text-sm font-normal'>{detail.description}</p>
         <div className='flex flex-row gap-2'>
         <p className='line-through'>$ {detail.price}</p>
         <p className='font-medium text-red-500'>$ {(detail.price)*(1/10)} /-</p>
         </div>
         <div className='items-center flex flex-row gap-5'>
         <button className='rounded-md w-40 border-2 border-black hover:bg-red-500 hover:text-white hover:border-white'>Add to Cart</button>
         <button className='rounded-md w-40 border-2 border-black hover:bg-amber-500 hover:text-white hover:border-white'>Buy Now</button>
         </div>
         
    </div>
    <button className='w-[5%] h-8 text-xl' onClick={handleOpenModal}><IoIosCloseCircleOutline/></button>
     
    
     </div>
  )
}

export default Modal