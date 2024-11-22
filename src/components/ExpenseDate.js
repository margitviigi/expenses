const ExpenseDate = (props) =>{
    const day = props.date.toLocaleString('et-EE',{day:'2-digit'})
    const month = props.date.toLocaleString('et-EE',{month:'long'})
    const year = props.date.getFullYear()


    return (
        <div className="expense-item">
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>

        </div>
        )
    } 
    export default ExpenseDate;