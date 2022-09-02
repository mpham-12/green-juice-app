import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button className={classes['cart-button']} onClick={props.onClick}>
      <span className={classes['cart-quantity']}>()</span>
      <img className={classes['cart-img']} src="https://img.icons8.com/arcade/64/000000/experimental-shopping-basket-2-arcade.png" />
    </button>
  );
}

export default HeaderCartButton;