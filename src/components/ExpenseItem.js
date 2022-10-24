import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div class = "expense-item">
      <div>March 28th 2021</div>
      <div >
        <h2 class = "expense-item__description">Car Insurance</h2>
        <div class = "expense-item__price" >$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
