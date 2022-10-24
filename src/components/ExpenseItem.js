import './ExpenseItem.css';

function ExpenseItem() {
  const Temp = new Date();
  const day = String(Temp.getDate()).padStart(2,0);
  const month = String(Temp.getMonth()+1).padStart(2,0);
  const yearNow = Temp.getFullYear();

  const expenseDate = day + '/' + month + '/' + yearNow;
  const expenseTittle = "Car Insurance";
  const expenseAmount = 294.67;


  return (
    <div class = "expense-item">
      <div>{expenseDate}</div>
      <div class = "expense-item__description" >
        <h2>{expenseTittle}</h2>
        <div class = "expense-item__price" >${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
