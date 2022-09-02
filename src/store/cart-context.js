import React from "react";

//set context with default data to give auto-completion
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { },
});

export default CartContext;