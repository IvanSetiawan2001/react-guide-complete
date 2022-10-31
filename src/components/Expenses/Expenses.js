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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onDropdownChange={savedDropdownChange} />
      {expenses.props.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
