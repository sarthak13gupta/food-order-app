import { Fragment , useState} from "react";

import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";

function App() {

  const [cartIsShown , setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => [
    setCartIsShown(false)
  ]

  return (
    <Fragment>
      {cartIsShown && <Cart closeCart = {hideCartHandler}/>}
      <Header showCart = {showCartHandler} />
      <main><Meals/></main>
    </Fragment>
  );
}

export default App;
