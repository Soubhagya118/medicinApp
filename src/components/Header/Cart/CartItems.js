import React,{useContext} from 'react';

import BodyContext from '../../Store/BodyContext/BodyContext';
import CartItemsList from './CartItemsList';

const CartItems = (props) => {
  const data = useContext(BodyContext);
  return (
    <>
      {data.items.map((e)=><CartItemsList key={e.id} {...e}/>)}
      <h1>totalAmount:{data.totalAmount}</h1>
      <button onClick={props.hideCart}> close</button>
    </>
  )
}

export default CartItems
