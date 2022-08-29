import DrinksSummary from "./DrinksSummary";
import AvailableDrinks from "./AvailableDrinks";
import classes from './Drinks.module.css'

const Drinks = () => {
  return (
    <div className={classes.drinks}>
      <DrinksSummary />
      <AvailableDrinks />
    </div>

  );
}

export default Drinks;