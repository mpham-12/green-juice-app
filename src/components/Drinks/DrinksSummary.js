import classes from './DrinksSummary.module.css'

const DrinksSummary = () => {
  return ( 
    <section className={classes.summary}>
      <h2 className={classes['drinks-title']}>Organic Cold-Pressed Juices</h2>
      <p className={classes['drinks-description']}>Choose your favourite juice from our broad selection of available juices.<br/> All our juices are made with local organic high-quality ingredients.</p>
    </section>
   );
}
 
export default DrinksSummary;