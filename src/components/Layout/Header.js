import classes from './Header.module.css'
import heroImg from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <img class={classes.logo} src={logo} alt="" />
        <button className={classes['cart-button']}>
          <img className={classes['cart-img']} src="https://img.icons8.com/arcade/64/000000/experimental-shopping-basket-2-arcade.png" />
        </button>
      </header>

      <div className={classes['hero-image']}>
        <img src={heroImg} alt="" />
        <h1 className={classes['welcome-title']}>Rest & Press</h1>
        <p>a cold-pressed organic juice company, helping people achieve happier and healthier lives</p>
      </div>
    </>
  );
}

export default Header;