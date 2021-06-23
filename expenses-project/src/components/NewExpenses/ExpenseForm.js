import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //multiple states

  const [enteredTitle, setEnteredTitle] = useState("");
  function addTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  const [enteredAmount, setEnteredAmount] = useState("");
  function addAmountHandler(event) {
    setEnteredAmount(event.target.value);
  }

  const [enteredDate, setEnteredDate] = useState("");
  function addDateHandler(event) {
    setEnteredDate(event.target.value);
  }

  //OR:
  //one state for all the updates
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: ""
  // });
  // function addTitleHandler(event){
  //     setUserInput((prevState)=>{
  //         console.log(userInput);
  //         return {...prevState, enteredTitle: event.target.value}

  //     })
  // }
  // function addAmountHandler(event){
  //     setUserInput((prevState)=>{
  //         console.log(userInput);
  //         return {...prevState, enteredAmount: event.target.value}
  //     })
  // }
  // function addDateHandler(event){
  //     setUserInput((prevState)=>{
  //         return {...prevState, enteredDate: event.target.value}
  //     })
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseForm(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={addTitleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.1"
            step="0.1"
            onChange={addAmountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-01-01"
            onChange={addDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
