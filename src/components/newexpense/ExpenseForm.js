import { useRef, useState } from 'react'
import './ExpenseForm.css'



const ExpenseForm = (props) => {


    const titleInputRef = useRef();
    const priceInputRef = useRef();
    const dateInputRef = useRef();

    

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredPrice = priceInputRef.current.value
        const enteredDate = dateInputRef.current.value

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
    )
}


export default ExpenseForm