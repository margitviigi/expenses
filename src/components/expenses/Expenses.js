import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"



const Expenses = (props) => {
    const[filteredYear, setFilteredYear] = useState('2024') 
    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        } 
    
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    } )
    
    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeYear={yearChangeHandler}/>
            {filteredExpenses.map((expense) => {
                    return <ExpenseItem data={expense} key={expense.id} />
                })} 
            
        </Card>
    )

}




 
export default Expenses