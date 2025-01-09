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
  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
