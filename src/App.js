import { useState } from "react";

import Header from "./components/Header/Header";
import CartContextProvider from "./components/Store/HeaderContext/HeaderContextProvider";


import DisplayMedicine from "./components/Body/DisplayMedicine";
import CartItems from "./components/Header/Cart/CartItems";
import BodyContextProvider from "./components/Store/BodyContext/BodyContextProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartFn=()=>{
    setShowCart(true);
  }
  const hideCart =()=>{
    setShowCart(false);

  }
  
  return (
    <CartContextProvider>
  
  <BodyContextProvider>
  <Header  showCartFn={showCartFn}/>
      {showCart && <CartItems hideCart={hideCart}/>}
      <DisplayMedicine/>
  </BodyContextProvider>
      
    </CartContextProvider>
  );
}

export default App;
