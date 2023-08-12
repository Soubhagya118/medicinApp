import React,{ useState} from 'react';
import CartContext from './HeaderContext';


const CartContextProvider = ({children}) => {
const [addMedicine,setAddMedicine] = useState([])

const addMedicineFn =(newMedicine)=>{
  console.log("provider", [...addMedicine,newMedicine])
    setAddMedicine([...addMedicine, newMedicine]);
}

  return (
    <CartContext.Provider value={{addMedicine, addMedicineFn}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
