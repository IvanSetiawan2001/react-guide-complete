import { useState } from "react";
import AddNewData from "./AddNewData";
import ExpenseForm from "./ExpensesForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [pointer, newPointer] = useState(0);

  const saveExpesenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
  };

  const changePointer = (sendback) => {
    newPointer(sendback);
  };

  let expenseForm = <AddNewData onCancelClicked={changePointer} />;
  if (pointer === 1) {
    expenseForm = (
      <ExpenseForm
        onSaveExpenseData={saveExpesenseDataHandler}
        onCancelClicked={changePointer}
      />
    );
  }

  return <div className="new-expense">{expenseForm}</div>;
};

export default NewExpenses;
