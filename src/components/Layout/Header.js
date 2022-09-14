import classes from './Header.module.css'
import heroImg from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'
import CartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <img className={classes.logo} src={logo} alt="" />
        <h1 className={classes['welcome-title']}>Rest & Press</h1>

        <CartButton onClick={props.onShowCart}/>
      </header>

      <div className={classes['hero-image']}>
        <img src={heroImg} alt="" />
        <p className={classes['header-description']}>a cold-pressed organic juice company, helping people achieve happier and healthier lives.</p>
      </div>
    </>
  );
}

export default Header;