import { useContext } from 'react';
import cartImg from '../../assets/cart.png'
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
      <img className={classes['cart-img']} src={cartImg} />
    </button>
  );
}

export default HeaderCartButton;