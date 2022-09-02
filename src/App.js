import { useState } from "react";
import Header from "./components/Layout/Header";
import Drinks from "./components/Drinks/Drinks";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true)
  }

  const hideCartHandler = ()=>{
    setShowCart(false)
  }
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Drinks/>
    </CartProvider>
  );
}

export default App;
