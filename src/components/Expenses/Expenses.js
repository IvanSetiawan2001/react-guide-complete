import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
