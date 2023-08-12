import React,{useContext, useRef} from 'react';
import BodyContext from '../Store/BodyContext/BodyContext';

const MapMedicine = ({id,name,description,price}) => {
  const bodyContext =useContext(BodyContext);
  console.log("mapmedicine",bodyContext )
  const inputQuantity = useRef();  
const QuantityAdd =(e)=>{
e.preventDefault();
const q= inputQuantity.current.value;
const quantityInNumber =+q;
const totalPrice = quantityInNumber * price; 
  bodyContext.addItems({id:id,name:name,price:price,description:description,totalAmount:totalPrice,quantity:quantityInNumber})
}
  return (
    <li style={{listStyle:'none'}}>
    <h2> <span>{name} {description} {price} 
    <form onSubmit={QuantityAdd}>
    <label>Quantity:-</label>
    <input type='number' min={1} max={9} defaultValue={1} id='quantity' ref={inputQuantity}/>
    <button>Add</button>
    </form>
</span>
    </h2>
   
      
    </li>
  )
}

export default MapMedicine
