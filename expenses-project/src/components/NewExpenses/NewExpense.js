import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function startIsEditing(){
    setIsEditing(true);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
     const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
        };
      props.onAddExpense(expenseData);
      setIsEditing(false);
  };
  const stopEditingHandler=()=>{
    setIsEditing(false);
  }
  if(isEditing){
    return (<div className="new-expense">
              <ExpenseForm onSaveExpenseForm={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
            </div>);
  }else{
    return (<div className="new-expense">
              <button onClick={startIsEditing}>Add new expense</button>
            </div>)
  }
}
export default NewExpense;
