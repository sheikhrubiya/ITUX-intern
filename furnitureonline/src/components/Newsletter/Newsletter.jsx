import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoWhatsapp } from 'react-icons/bi'

const Newsletter = () => {
  return (
    <div className='max-w-[500px] mx-auto space-y-5 py-14'>
      <div>
        {/* heading section */}
        <h1 className='text-xl font-bold font-serif text-center'>Subscribe to our newsletter</h1>
        <p className='max-w-[300px] mx-auto text-sm text-gray-500 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis.</p>
      </div>
      {/* form here */}
      <div className='!mt-20 flex flex-col justify-center gap-5 h-4 ml-18'>
        <input type='text' placeholder='Enter your email' className='px-4 py-4 border-[1px] border-black'/>
        <button className='primary-btn uppercase '>Subscribe</button>
        <div className="flex flex-row justify-between text-2xl">
          <div className="cursor-pointer">
            <BiLogoFacebook/>
          </div>
          <div className="cursor-pointer">
            <BiLogoTwitter/>
          </div>
          <div className="cursor-pointer">
            <BiLogoInstagram/>
          </div>
          <div className="cursor-pointer">
            <BiLogoWhatsapp/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter