import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <div>
        <h4>Transaction History</h4>
            <ul className="list">
                {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
      </div>
    </div>
  )
}