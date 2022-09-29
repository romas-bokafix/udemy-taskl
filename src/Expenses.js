import React from "react";
import Expense from "./Expense";
import expenses from "./expenses-list";
import './expences.css'

function Expenses() {
  return (
    <div className="expenses">
      {
      expenses.map((expense, key) => (
        <Expense expense={expense} key={expense.title + 'key'}/>
      ))
      }
    </div>
  );
}

export default Expenses;
