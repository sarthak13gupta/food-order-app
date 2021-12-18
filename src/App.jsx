import { Fragment } from "react";

import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <main><Meals/></main>
    </Fragment>
      
    
  );
}

export default App;
