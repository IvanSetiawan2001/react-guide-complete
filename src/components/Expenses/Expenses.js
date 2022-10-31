import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (expenses) => {
  const [year, enteredSelectedYear] = useState("2020");

  const savedDropdownChange = (selectedYear) => {
    enteredSelectedYear(selectedYear);
  };

  const filteredExpenses = expenses.props.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>there is no item </p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onDropdownChange={savedDropdownChange} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
