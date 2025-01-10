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
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem data={expense} key={expense.id} />
                } )
            }
        </Card>
    )

}

 
export default Expenses