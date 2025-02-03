import React from 'react'
import banner from '../assets/template4banner.jpeg'
const Banner = () => {
  return (
    <div className='mt-8 relative ml-8'>
      <img src={banner} alt='banner' className='w-[1200px] h-[500px]'/>
      <div className='absolute top-40 left-[450px]'>
      <p className='text-white text-4xl font-bold tracking-widest'>Christmas Sale</p>
      <p className='text-white text-lg font-normal tracking-widest'>Invest in timeless furniture now.</p>
      </div>
    </div>
  )
}

export default Banner