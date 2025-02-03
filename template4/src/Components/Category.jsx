import React from 'react'
import chair from '../assets/chair.jpg'
import dining from '../assets/dining.jpg'
import bed from '../assets/bed.jpg'
import couch from '../assets/insp1.jpg'
import office from '../assets/office.jpg'
import outdoor from '../assets/outdoor1.jpeg'
import table from '../assets/veda.jpeg'
import almirah from '../assets/furnitures/almirah.jpg'
const Category = () => {
  const category = [
    { title:'chair',
      image:chair
    },
    { title:'dining',
      image:dining
    },
    { title:'bed',
      image:bed
    },
    { title:'couch',
      image:couch
    },
    { title:'office',
      image:office
    },
    { title:'outdoor',
      image:outdoor
    },
    { title:'almirah',
      image:almirah
    },
    { title:'table',
      image:table
    },
  ]
  return (
    <div className='flex flex-row justify-between mt-20 px-8'>
      {
        category.map((obj)=>(
          <div key={obj.title} className=' flex flex-col gap-2 hover:cursor-pointer'>
            <img src={obj.image} alt={obj.title} className='w-20 h-20 rounded-full'/>
            <p className='uppercase font-serif text-xs hover:text-amber-600 ml-4'>{obj.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Category