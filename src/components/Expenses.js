import ExpenseItem from "./ExpenseItem";

function Expenses(expenses) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses.props[0].title}
        amount={expenses.props[0].amount}
        date={expenses.props[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.props[1].title}
        amount={expenses.props[1].amount}
        date={expenses.props[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.props[2].title}
        amount={expenses.props[2].amount}
        date={expenses.props[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.props[3].title}
        amount={expenses.props[3].amount}
        date={expenses.props[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
