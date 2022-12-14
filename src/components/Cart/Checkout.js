import { useRef, useState } from 'react';
import classes from './Checkout.module.css'

const isEmpty = (value) => {
  return value.trim() === '';
}

const validEmail = (value)=>{
  return value.includes('@');
}

const isSixChars = (value) => {
  return value.trim().length === 6
}



const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    address: true,
    city: true,
    postal: true,
  })

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = validEmail(enteredEmail);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isSixChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid
    })

    const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredAddressIsValid && enteredCityIsValid && enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name:enteredName,
      email: enteredEmail,
      address:enteredAddress,
      postal:enteredPostal,
      city:enteredCity,

    });
  }

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <h1 className={classes.cartTitle}>Enter Your Delivery Address</h1>
      <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
        <label htmlFor="name" >Your Name</label>
        <input type="text" id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p className={classes.inputValidity}>Please enter a valid name.</p>}
      </div>

      <div className={`${classes.control} ${formInputValidity.email ? '' : classes.invalid}`}>
        <label htmlFor="email" >Your Email</label>
        <input type="text" id='email' ref={emailInputRef} />
        {!formInputValidity.email && <p className={classes.inputValidity}>Please enter a valid email.</p>}
      </div>

      <div className={`${classes.control} ${formInputValidity.address ? '' : classes.invalid}`}>
        <label htmlFor="address" >Address</label>
        <input type="text" id='address' ref={addressInputRef} />
        {!formInputValidity.address && <p className={classes.inputValidity}>Please enter a valid address.</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id='postal' ref={postalInputRef} />
        {!formInputValidity.postal && <p className={classes.inputValidity}>Please enter a valid postal code (e.g. 1A1A1A).</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p className={classes.inputValidity}>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button className={classes.cancel} type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.confirm}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;