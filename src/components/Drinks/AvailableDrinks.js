import Drink from './Drink'
import classes from './AvailableDrinks.module.css'

const dummyDrinks = [
  {
    id: 'd1',
    name: 'Dandy Mandy 250ml',
    ingredients: 'celery - kale - swiss chard - dandelion - parsley - lemon - ginger - cucumber',
    price: 9.99
  },
  {
    id: 'd2',
    name: 'Pure Celery 250ml',
    ingredients: 'celery',
    price: 9.99
  },
  {
    id: 'd3',
    name: 'Blue Magic 250ml',
    ingredients: 'blu majik algae - pineapple - stevia - lime - alkaline water',
    price: 9.99
  },
  {
    id: 'd4',
    name: 'Mama Chia 250ml',
    ingredients: 'apple - chia seeds - cinnamon - alkaline water',
    price: 9.99
  },
  {
    id: 'd5',
    name: 'Pineapple Chia 250ml',
    ingredients: 'pineapple - chia - coconut water',
    price: 9.99
  },
  {
    id: 'd6',
    name: 'Boldly Green 250ml',
    ingredients: 'spinach - lemon - cucumber - celery - ginger',
    price: 9.99
  },
  {
    id: 'd7',
    name: 'Fiesty 250ml',
    ingredients: 'apple - burdock root - lemon - ginger - turmeric - cayenne',
    price: 9.99
  },
  {
    id: 'd8',
    name: 'Power Me Up 250ml',
    ingredients: 'cucumber - spinach - kale - arugula - fennel - basil - apple - lemon',
    price: 9.99
  },
  {
    id: 'd9',
    name: 'Tutti Frutti 250ml',
    ingredients: 'pineapple - orange - strawberry - lemon - ginger',
    price: 9.99
  },
  {
    id: 'd10',
    name: 'Just Beet It 250ml',
    ingredients: 'apple - beet - pear - lemon - ginger',
    price: 9.99
  }
]


const AvailableDrinks = () => {
  const drinksList = dummyDrinks.map((drink) => {
    return <ul> <li><Drink id={drink.id} key={drink.id} name={drink.name} ingredients={drink.ingredients} price={drink.price}/></li> </ul>
  })

  return (
    <section className={classes['drinks-list']}>
      <h1 className={classes.title}>This Week's Creations</h1>
        {drinksList}
    </section>
  );
}

export default AvailableDrinks;