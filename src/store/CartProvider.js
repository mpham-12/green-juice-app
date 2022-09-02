import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCart = item => { };
  const removeItemFromCart = id => { };


  const cartContext = {
    items: [],
    qty: 0,
    additem: addItemToCart,
    removeItem: removeItemFromCart,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;