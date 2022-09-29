import React from 'react'
import './expense-item.css'
import ExpenseDate from './ExpenseDate'

function Expense(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate expense={props.expense} />
      <h2>{props.expense.title}</h2>
      <div className="expense-item__price">
        {props.expense.amount}
      </div>
    </div>
  )
}

export default Expense