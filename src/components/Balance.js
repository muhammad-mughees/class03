import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionAmount = transactions.map(transaction => transaction.transactionAmount);

  const total = transactionAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance">
      <span>Current Balnce <h1>{total} PKR</h1></span>
    </div>
  )
}