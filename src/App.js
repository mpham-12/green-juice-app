import Header from "./components/Layout/Header";
import Drinks from "./components/Drinks/Drinks";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Cart/>
      <Header />
      <Drinks/>
    </div>
  );
}

export default App;
