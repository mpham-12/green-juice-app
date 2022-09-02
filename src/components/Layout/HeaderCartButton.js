import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartQty = cartCtx.items.reduce((curr, item)=>{
    return curr + item.totalAmount
  }, 0)
  return (
    <button className={classes['cart-button']} onClick={props.onClick}>
      <span className={classes['cart-quantity']}>{cartQty}</span>
      <img className={classes['cart-img']} src="https://img.icons8.com/arcade/64/000000/experimental-shopping-basket-2-arcade.png" />
    </button>
  );
}

export default HeaderCartButton;