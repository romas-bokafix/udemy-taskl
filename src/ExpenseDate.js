import React from 'react'
import './expense-date.css'

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__year">
        {props.expense.date.getFullYear()}
      </div>
      <div className="expense-date__month">
        {props.expense.date.toLocaleString('en-US', { month: 'long' })}
      </div>
      <div className="expense-date__day">
        {props.expense.date.toLocaleString('en-US', { day: '2-digit' })}
      </div>
    </div>
  )
}

export default ExpenseDate