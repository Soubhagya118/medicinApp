import React, { useContext } from 'react'
import BodyContext from '../../Store/BodyContext/BodyContext'
const Cart = (props) => {

  const totalCart = useContext(BodyContext);
  const tt =totalCart.items.reduce((a,c)=>{return a+c.quantity},0);
  return (
    <div className={props.className}>
      <button onClick={props.showCart}>Cart {tt}</button>
    </div>
  )
}

export default Cart
