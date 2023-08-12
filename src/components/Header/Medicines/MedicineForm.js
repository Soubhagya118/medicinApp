import React,{useContext, useRef} from 'react';
import CartContext from '../../Store/HeaderContext/HeaderContext';

const MedicineForm = (props) => {
    const { addMedicineFn}= useContext(CartContext)
    const medicineName = useRef();
    const medicineDescription= useRef();
    const medicinePrice = useRef();
const handelSubmit=(e)=>{
    e.preventDefault();
    const name = medicineName.current.value;
    const description = medicineDescription.current.value;
    const price=medicinePrice.current.value;
    addMedicineFn({id:Math.random(),name:name,description:description,price:price});

}
  return (

      <form onSubmit={handelSubmit} className={props.className}>
      
        <label >Medicine Name:-</label>
        <input type='text' id='name'  placeholder='Enter Medicine Name...' name='name' ref={medicineName}/>
        <label >Medicine Description:-</label>
        <input type='text' id='description'  placeholder='Enter Medicine Description...' name='description' ref={medicineDescription}/>
        <label >Medicine Price:-</label>
        <input type='number' id='price'  placeholder='Enter Medicine Price...' name='price' ref={medicinePrice}/>
        <button>Add Product</button>

      </form>
  )
}

export default MedicineForm
