import { useRef, useState } from 'react'
import classes from './DrinkForm.module.css'
import Input from '../UI/Input';

const DrinkForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const enteredQty = amountInputRef.current.value;
    //.current.value is always return a string, so convert to number:
    const enteredQtyNum = Number(enteredQty);

    if (enteredQty.trim().length === 0 || enteredQtyNum < 1) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredQtyNum)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1'
        }} />
      <button className={classes['form-btn']} type='submit'>Add item</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
}

export default DrinkForm;