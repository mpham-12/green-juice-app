import { useContext, useState } from 'react';
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';
import Checkout from './Checkout';
import logo from '../../assets/logo.png'


const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const addCartItemHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartCtx.addItem(cartItem);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch('https://press-and-rest-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });

    setIsSubmitting(false);
    setDidSubmit(true);
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

  const cartButtons = <div className={classes.actions}>
    <button className={classes.close} onClick={props.onHideCart}>Close</button>
    {cartCtx.items.length > 0 && <button className={classes.submit} onClick={orderHandler}>Submit</button>}
  </div>

const emptyCart = <div className={classes.emptyCart}>
  <img className={classes.logo} src={logo} alt="" />
<p className={classes.emptyCart}>No Items in Your Cart.</p>
</div>
  const cartModalContent = <>
    {cartCtx.items.length === 0 ? emptyCart : cartItems}
    {isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onHideCart} />}
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
    {!isCheckout && cartButtons}
  </>

  const isSubmittingModalContent = <p>Sending your order!</p>

  const didSubmitModalContent = <div className={classes.submitOrder}>
    <img className={classes.logo} src={logo} alt="" />
    <p>Successfully submitted!</p>
    <p>You will recieve a confirmation email shortly.</p>
  </div>
  return (
    <Modal onHide={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;