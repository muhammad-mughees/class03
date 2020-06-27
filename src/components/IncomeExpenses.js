import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.transactionAmount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(0) + " PKR";

  const expense = ( amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) *
    -1)
    .toFixed(0) + " PKR";
  
  return (
    <div className="incomeExpenses-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus number">{expense}</p>
      </div>
    </div>
  )
}