import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);

  const handleFormOpen = () => {
    setEditForm(true);
  };

  const handleFormClose = () => {
    setEditForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div data-testid="new-expense-wrapper">
      {!editForm && (
        <div className="new-expense" data-testid="add-expense-button-container">
          <button
            onClick={handleFormOpen}
            aria-label="Add new expense"
            data-testid="add-expense-button"
          >
            Add new expense
          </button>
        </div>
      )}

      {editForm && (
        <div className="new-expense" data-testid="expense-form-container">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={handleFormClose}
            aria-label="Expense form"
            data-testid="expense-form"
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
