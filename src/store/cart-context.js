import React from "react";

//set context with default data to give auto-completion
const CartContext = React.createContext({
  items: [],
  qty: 0,
  addItem: (item) => { },
  removeItem: (id) => { },
});

export default CartContext;