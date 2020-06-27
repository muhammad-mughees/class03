import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (Number(transactionAmount) === 0) {
      alert("Please Enter Correct Value");
      return false;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description: description,
      transactionAmount: +transactionAmount
    }

    setDescription('');
    setTransactionAmount('')
    addTransaction(newTransaction);
  }

  return (
    <div>
      <h4>Add New Transaction</h4>
      <form onSubmit={onSubmit}>
          <div className="from-control">
              <label htmlFor="description">
                  Description
              </label>
              <input type="text"
                  id="discription"
                  placeholder="Enter description of the transaction" required
                  value={description}
                  onChange={(e) =>setDescription(e.target.value)}
              />
          </div>
          <div className="from-control">
          <label htmlFor="transactionAmount">
              Amount <span>(Add Minus (-) before Amount for Expenses)</span></label>
              <input  type="number"
                      id="transactionAmount"
                      placeholder="Etner the amount" required
                      value={transactionAmount}
                      onChange={(e) =>setTransactionAmount(e.target.value)}
              />
          </div>
          <button className="btn">
              Add Transaction
          </button>
        </form>
    </div>
  )
}