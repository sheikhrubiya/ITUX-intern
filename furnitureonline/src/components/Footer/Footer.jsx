import React from 'react'
import Logo from '../../assets/logo.png'
import { FaPhone } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* company info */}
          <div className='space-y-2 font-semibold'>
            <div className='flex items-center space-x-3'>
            <img src={Logo} alt="logo"className='w-10'/>
            <p className='text-2xl font-semibold'>Furnitures</p>
            </div>
            <p>Saket, South Delhi, India</p>
            <p>@ 2024 FJT All rights reserved</p>
          </div>
          {/* footer link */}
          <div className='grid grid-cols-2 gap-10'>
             <div className='space-y-2 '>
               <h1 className='text-xl font-semibold'>About Us</h1>
               <ul className='text-sm space-y-1'>
                <li><a href='#'>Our Story</a></li>
                <li><a href='#'>Designers</a></li>
                <li><a href='#'>Craftmanship</a></li>
                <li><a href='#'>Sustainability</a></li>
               </ul>
             </div>
             <div className='space-y-2'>
               <h1 className='text-xl font-semibold'>Support</h1>
               <ul className='text-sm space-y-1'>
                <li><a href='#'>FAQ's</a></li>
                <li><a href='#'>Shipping & Returns</a></li>
                <li><a href='#'>Care Guide</a></li>
                <li><a href='#'>Guaranty</a></li>
               </ul>
             </div>
             
          </div>
          <div>
          <div className='space-y-2'>
               <h1 className='text-xl font-semibold'>Contact Us</h1>
               <ul className='text-base font-semibold space-y-1'>
                <li className='flex gap-5'><span><FaPhone/></span>
                <a href='#'>+1 504 235476</a></li>
                <li className='flex gap-5'><span><FaMessage/></span>
                <a href='mailto:contact.furnitures.com'>support@furnitues.com</a></li>
               </ul>
             </div>
          </div>
         </div>  
      </div>
      {/* bootm section */}
      <p className='text-center text-sm font-semibol mt-5 border-t-2 pt-5'>2024 TCJ. All rights reserved</p>
    </footer>
  )
}

export default Footer