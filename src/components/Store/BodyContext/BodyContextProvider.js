 import React,{useReducer} from 'react';
 import BodyContext from './BodyContext';


 const defaultCart={
  items:[],
  totalAmount:0,
 }
 const reducerFn=(state,action)=>{
  if(action.type =='add'){
    console.log(action.type);
    const pp =+(action.item.price);
  
    const updatedTotalAmount = +(state.totalAmount)+pp;
const updatedItems = state.items.concat(action.item);
  
 return  {
      items:updatedItems,
      totalAmount: +updatedTotalAmount
    };


  }

  return defaultCart;
 }
 
 const BodyContextProvider = ({children}) => {
    const [cartState,dispatcherFn] = useReducer(reducerFn,defaultCart);

    const addItemsFunction=(item)=>{
      dispatcherFn({type: 'add', item:item})
    }
    const cartItems ={
      items:cartState.items,
      totalAmount:cartState.totalAmount,
      addItems:addItemsFunction
    }
   return (
     <BodyContext.Provider value={cartItems}>
       {children}
     </BodyContext.Provider>
   )
 }
 
 export default BodyContextProvider
 