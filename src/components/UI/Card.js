import './Card.css'

const ExpenseItem = (props) =>{
    const classes = 'card ' + props.className

    return <div className={classes} >
       {props.children} 
    </div>
} 
export default ExpenseItem