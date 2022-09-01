import classes from './Cart.module.css'

const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: 'green drink', quantity: 3, price: 9.99 }].map((item) => {
    <div> item.name, item.quantity, item.price</div>
  })

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>33.22</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Submit</button>
        <button className={classes.close}>Close</button>
      </div>
    </div>
  );
}

export default Cart;