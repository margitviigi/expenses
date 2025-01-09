import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"



const Expenses = (props) => {
    const yearChangeHandler = (year) => {
        console.log(year)
        } 
    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeYear={yearChangeHandler}/>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )

}

 
export default Expenses