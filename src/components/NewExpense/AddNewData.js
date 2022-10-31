import "./ExpenseForm.css";

const AddNewData = (props) => {
  const showForm = () => {
    props.onCancelClicked(1);
  };

  return (
    <div className="new-Button">
      <button onClick={showForm}>Add New Expense</button>
    </div>
  );
};

export default AddNewData;
