import React from 'react'
import Shop from '../Data/Data'
import { FaEye, FaHeart, FaStar } from 'react-icons/fa'
import image from '../assets/diningsale.jpg'


const Dining = ({addtocart, handleOpenModal, addtowishlist}) => {
  const data= Shop.filter((item)=>item.category==="Table")
  return (
    <div className='w-full flex flex-col gap-5 p-5'>
     <img className='h-[400px]' src={image}/>
      <h1 className='text-xl font-semibold text-center'>Dining Collections</h1>
      <p className='text-sm font-extralight text-center'>This furniturе еncompassеs a widе rangе of dеsigns and stylеs, from classic wooden frames to modеrn bеds.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-2">
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="relative border-2 border-slate-200 w-full h-[350px] sm:h-[400px] rounded-md hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-40 rounded-md"
                      />
                      <div className="absolute top-5 left-44 text-red-500 flex flex-col gap-4">
                        <div className="hover:text-lg" onClick={() => addtowishlist(item)}>
                          <FaHeart/>
                        </div>
                        <div className="hover:text-lg" onClick={() => handleOpenModal(item)}>
                          <FaEye/>
                        </div>
                      </div>
                      <div className="p-4">
                        <h1 className="text-lg font-semibold">{item.name}</h1>
                        <p className="text-sm text-gray-500">{item.description.substring(0, 50)}...</p>
                        <p className="text-red-600 font-semibold mt-2">${item.price}</p>
                        <div>
                          <p>Rating: 4.3</p>
                          <span className="flex flex-row text-amber-300">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                          </span>
                        </div>
                        <button
                          className="w-full h-10 mt-4 border-2 border-black rounded-md hover:bg-slate-500 hover:text-white"
                          onClick={() => addtocart(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
    </div>
  )
}

export default Dining