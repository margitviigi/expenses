import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
} 
export default Expenses