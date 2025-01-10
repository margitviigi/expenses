import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"



const Expenses = (props) => {
    const[filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString()) 
    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        } 
    
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    } )
    

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeYear={yearChangeHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
       </Card>
    )

}




 
export default Expenses