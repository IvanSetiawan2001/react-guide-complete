import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input type="date" min="2022-01-01" max="2024-12-31"></input>
        </div>
      </div>
      <div className="new-expenses__action">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;