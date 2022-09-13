import { useContext } from 'react';
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const addCartItemHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartCtx.addItem(cartItem);
  };

  const cartItems = (<ul className={classes.cart}>
    {cartCtx.items.map((item) => {
      return <CartItem
        key={item.id}
        name={item.name}
        amount={item.totalAmount}
        price={item.price}
        onRemove={removeCartItemHandler.bind(null, item.id)}
        onAdd={addCartItemHandler.bind(null, { ...item, amount: 1 })} />

    })}
  </ul>
  )

  return (
    <Modal onHide={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Sub Total</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.total}>
        <span>Taxes</span>
        <span>${(totalAmount * 0.13).toFixed(2)}</span>
      </div>
      <div className={classes.total}>
        <span>Total</span>
        <span>${(totalAmount * 1.13).toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        {cartCtx.items.length > 0 && <button className={classes.submit}>Submit</button>}
        <button className={classes.close} onClick={props.onHideCart}>Close</button>
      </div>
    </Modal>
  );
}

export default Cart;