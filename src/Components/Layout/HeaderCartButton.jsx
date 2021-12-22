import {useContext} from 'react'


import classes from "./HeaderCartButton.module.css"
import CartContext from '../../store/cart-context'
import CartIcon from "../Cart/CartIcon"
import React from "react"

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) =>{
        return curNumber + item.amount;
    },0)  //return a single value after applying the function to an array  

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton