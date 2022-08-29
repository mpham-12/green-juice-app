const Drink = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.ingredients}</div>
      <div>{props.price}</div>
    </>
  );
}

export default Drink;