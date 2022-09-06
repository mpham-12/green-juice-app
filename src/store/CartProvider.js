import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalPrice = state.totalAmount + action.item.price * action.item.totalAmount

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        totalAmount: existingCartItem.totalAmount + action.item.totalAmount
      }

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalPrice
    }
  }
  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = item => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item })
  };
  const removeItemFromCart = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
  };


  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;