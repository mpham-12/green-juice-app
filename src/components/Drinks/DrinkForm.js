import classes from './DrinkForm.module.css'
import Input from '../UI/Input';

const DrinkForm = (props) => {
  return (
    <form className={classes.form} action="">
      <Input label='Amount' input={{ id: 'amount'+props.id, type: 'number', min: '1', step: '1', defaultValue: '1' }} />
      <button className={classes['form-btn']} type='submit'>Add item</button>
    </form>
  );
}

export default DrinkForm;