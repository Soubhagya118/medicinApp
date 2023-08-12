import React from 'react'

const CartItemsList = ({name,price,quantity}) => {
  return (
    <li style={{listStyle:"none"}}>
      <p>{name} {price} {quantity}</p>
    </li>
  )
}

export default CartItemsList
