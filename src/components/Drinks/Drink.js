import classes from './Drink.module.css'

const Drink = (props) => {
  return (
    <>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.ingredients}>{props.ingredients}</div>
      <div className={classes.price}>{props.price}</div>
    </>
  );
}

export default Drink;