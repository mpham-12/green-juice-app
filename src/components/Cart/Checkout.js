import { useRef } from 'react';
import classes from './Checkout.module.css'

const Checkout = (props) => {
const nameInputRef = useRef();
const addressInputRef = useRef();
const postalInputRef = useRef();
const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = city.current.value;

  }

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name" >Your Name</label>
        <input type="text" id='name' ref={nameInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="address" >Address</label>
        <input type="text" id='address'ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id='postal' ref={postalInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id='city' ref={cityInputRef}/>
      </div>
      <div className={classes.actions}>
        <button className={classes.cancel} type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.confirm}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;