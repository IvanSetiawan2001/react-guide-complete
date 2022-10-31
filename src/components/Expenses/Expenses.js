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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onDropdownChange={savedDropdownChange} />
      {filteredExpenses.length === 0 ? (
        <p>there is no item </p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
