import React from 'react'

const Cart = ({Cart, setCart}) => {
  return (
    <div>
      {Cart.map((obj)=>(<img src={obj.image}/>))}
    </div>
  )
}

export default Cart