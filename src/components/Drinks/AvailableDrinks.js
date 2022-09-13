import Drink from './Drink'
import classes from './AvailableDrinks.module.css'
import { useEffect } from 'react'
import { useState } from 'react'

const AvailableDrinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchDrinks = async () => {
      setIsLoading(true);
      const response = await fetch('https://press-and-rest-default-rtdb.firebaseio.com/drinks.json')

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedDrinks = [];

      for (const key in data) {
        loadedDrinks.push({
          id: key,
          name: data[key].name,
          ingredients: data[key].ingredients,
          price: data[key].price
        })
      }
      setDrinks(loadedDrinks);
      setIsLoading(false);
    }

    fetchDrinks()
      .catch((e) => {
        setIsLoading(false);
        setHttpError(e.message);
      });

  }, [])

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    )
  }

  const drinksList = drinks.map((drink) => {
    return <Drink key={drink.id} id={drink.id} name={drink.name} ingredients={drink.ingredients} price={drink.price} />
  })

  return (
    <section className={classes['drinks-list']}>
      <h1 className={classes.title}>This Week's Creations</h1>
      <ul>
        {drinksList}
      </ul>
    </section>
  );
}

export default AvailableDrinks;