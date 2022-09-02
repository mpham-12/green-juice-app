import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Drink.module.css'
import DrinkForm from './DrinkForm';

const Drink = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      totalAmount: amount,
      price: props.price
    })
  }

  return (
    <>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.ingredients}>{props.ingredients}</div>
      <div className={classes.price}>{props.price.toFixed(2)}</div>

      <DrinkForm onAddToCart={addToCartHandler} />
    </>
  );
}

export default Drink;