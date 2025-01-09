import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newexpense/NewExpense';

const App = () =>{
  const expenses = [
    {
    date: new Date(2024, 10, 22),
    title:'New book',
    price: 39.99
    },
    {
    date: new Date(2024, 10, 22),
    title:'New bag',
    price: 99.99
    },  
] 
const addExpenseHandler = (expense) =>{
  console.log('In App.js')
  console.log(expenses)
}   
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
