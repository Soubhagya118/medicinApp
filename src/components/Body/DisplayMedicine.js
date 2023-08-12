import React,{useContext} from 'react'
import CartContext from '../Store/HeaderContext/HeaderContext';
import MapMedicine from './MapMedicine';
import classes from './DisplayMedicine.module.css'

const DisplayMedicine = () => {
const data = useContext(CartContext);
const medicineList= data.addMedicine;
console.log(data)

  return (
    <div className={classes.body}>
      <ul>
        {medicineList.map((e)=><MapMedicine key={e.id} {...e}/>)}
      </ul>
    </div>
  )
}

export default DisplayMedicine
