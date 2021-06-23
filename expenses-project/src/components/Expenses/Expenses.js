import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");

  function filterChangeHandler(year) {
    setYearFilter(year);
  }
  const filteredExpenses = props.items.filter(item =>{
    return item.date.getFullYear().toString() === yearFilter}
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFilter}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart items={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
