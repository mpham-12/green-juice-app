import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <button className={classes['cart-button']}>
      <span className={classes['cart-quantity']}>()</span>
      <img className={classes['cart-img']} src="https://img.icons8.com/arcade/64/000000/experimental-shopping-basket-2-arcade.png" />
    </button>
  );
}

export default HeaderCartButton;