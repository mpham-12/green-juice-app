import Modal from '../UI/Modal'
import classes from './Cart.module.css'


const Cart = (props) => {
  const dummyCart=[{ id: 'c1', name: 'green drink', quantity: 3, price: 9.99 }];
  const cartItems = dummyCart.map((item) => {
    return <div> {item.name}</div>
  })

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>33.22</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Submit</button>
        <button className={classes.close} onClick={props.onHideCart}>Close</button>
      </div>
    </Modal>
  );
}

export default Cart;