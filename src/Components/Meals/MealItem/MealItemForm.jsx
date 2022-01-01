import { useRef , useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid , setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; //this value is in String data type
        const enteredAmountNumber = +enteredAmount; //converting string to int

        if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
        return;
        }

        props.onAddToCart(enteredAmountNumber)
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="Amount"
            input={{
            id: "Amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
            }}
        />
        <button>+Add</button>
        {!amountIsValid && <p>please enter a valid amount (1-5)</p>}
        </form>
    );
    };

    export default MealItemForm;
