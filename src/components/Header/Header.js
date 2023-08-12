import React from 'react'
import MedicineForm from './Medicines/MedicineForm'
import Cart from './Cart/Cart';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <MedicineForm className={classes.form}/>
      <Cart className={classes.cart} showCart={props.showCartFn}/>
    </div>
  )
}

export default Header
