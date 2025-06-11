import { Fragment, useRef, useState } from 'react'
import './ExpenseForm.css'
import Error from '../UI/Error';



const ExpenseForm = (props) => {

    const [error, setError] = useState(null)
    console.log(error) 
    const titleInputRef = useRef();
    const priceInputRef = useRef();
    const dateInputRef = useRef();

    const errorHandler = () => {
        setError(null)
    } 

    const submitHandler = (event) => {

        const enteredTitle = titleInputRef.current.value
        const enteredPrice = priceInputRef.current.value
        const enteredDate = dateInputRef.current.value

        event.preventDefault()

        if(enteredTitle.trim().length == 0 || enteredAmount.trim().length == 0 || 
        enteredDate.trim().length ==0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title or amount or date (non-empty values)'
            } )
            return
        }   

        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate) 
        } 
        props.onSaveExpenseData(expenseData)
        props.onCancel()

        titleInputRef.current.value = ''
        priceInputRef.current.value = ''
        dateInputRef.current.value = ''

    
    } 
    
         return(
        <Fragment>
           {error && (
            <Error
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />   
           )} 
           <div>
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" id="title"
                    ref={titleInputRef}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" id="price" ref={priceInputRef} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2025-01-09" max="2026-01-31" id="date" ref={dateInputRef} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="close" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
        </div>
        </Fragment>
    )
}


export default ExpenseForm