import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(expenses) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
