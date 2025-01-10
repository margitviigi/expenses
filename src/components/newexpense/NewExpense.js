import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"



const NewExpense = (props) => {
    const[editForm, setEditForm] = useState(false) 
    const handleFormOpen = () => {
        setEditForm(true)
    } 

    const handleFormClose = () => {
        setEditForm(false)
    } 


    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onAddExpense(expenseData)

    } 

    return(
        <div>
        {!editForm && (
            <div className="new-expense">
          <button onClick={handleFormOpen}>Add new expense</button>
            </div>
        )}
  
        {editForm && (
            <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleFormClose} />
            </div>
        )}
      </div>
  

    )
} 
export default NewExpense