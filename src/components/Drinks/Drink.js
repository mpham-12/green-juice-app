import classes from './Drink.module.css'
import DrinkForm from './DrinkForm';

const Drink = (props) => {
  return (
    <>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.ingredients}>{props.ingredients}</div>
      <div className={classes.price}>{props.price.toFixed(2)}</div>

      <DrinkForm/>
    </>
  );
}

export default Drink;