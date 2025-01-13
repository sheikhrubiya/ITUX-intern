import React from 'react';
import image1 from '../assets/insp1.jpg';
import image2 from '../assets/image1.jpeg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/english.jpeg';

const inspirationsData = [
  {
    image: image2,
    title: "Contemporary",
    subtitle: "Trending & Chic",
    description: "Modern",
    buttonText: "Explore Now",
  },
  {
    image: image4,
    title: "Classic",
    subtitle: "Minimal & Sophisticated",
    description: "Modern",
    buttonText: "Explore Now",
  },
  {
    image: image5,
    title: "Western",
    subtitle: "Laidback & Relaxed",
    description: "Modern",
    buttonText: "Explore Now",
  },
];

const Inspirations = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative px-6 py-8 w-full h-[500px]'>
        <img src={image1} alt='Shop By Style' className='w-full h-full object-cover'/>
        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl font-mono'>
          Shop By Style
        </p>
      </div>

      {/* Intro Text */}
      <div className='w-full h-auto p-6 sm:p-10 mb-10'>
        <h1 className='text-xl sm:text-2xl tracking-wide text-center'>
          We are Obsessed with Finding You The Best Styles
        </h1>
        <p className='text-base sm:text-md text-center font-extralight mt-4'>
          Whether you're going for the traditional, minimalism of a classic penthouse or the rustic, easy-going feel of an ocean-side bungalow, we've got you covered. Pick your favourite style from our artful curations to build your dream home.
        </p>
      </div>

      {/* Inspirations Loop */}
      {inspirationsData.map((data, index) => (
        <div key={index} className='w-full h-auto flex flex-col relative mb-12'>
          <img src={data.image} alt={`Inspiration ${index}`} className='w-full h-[400px] sm:h-[500px] object-cover'/>
          
          <div className='absolute top-[30%] sm:top-[35%] left-1/2 transform -translate-x-1/2 text-center text-white'>
            <p className='text-sm sm:text-base font-extralight tracking-wider'>{data.subtitle}</p>
            <p className='text-3xl sm:text-5xl font-extralight mt-2'>{data.title}</p>
            <p className='text-xl sm:text-4xl font-normal mt-2 tracking-wider'>{data.description}</p>
          </div>
          
          <button className='absolute top-[60%] left-1/2 transform -translate-x-1/2 mt-4 sm:mt-8 border-2 border-slate-100 bg-white text-black font-light rounded-md p-2 sm:p-3 hover:bg-black hover:text-white'>
            {data.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Inspirations;
