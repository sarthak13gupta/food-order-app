import { Fragment } from "react"

import HeaderCartButton from "./HeaderCartButton.jsx"
import mealsImage from "../../assets/MealsImage.jpeg"
import classes from "./Header.module.css"

const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick = {props.showCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header