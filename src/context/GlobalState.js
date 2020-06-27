import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from './AppReducer'

// Initiate the state
const initialState = {
    transactions: [
        {id: 1, description: "Lunch", transactionAmount: -1050},
        {id: 2, description: "UAE Client", transactionAmount: 100000},
        /*{id: 3, description: "Salary", transactionAmount: -10000},
        {id: 4, description: "US John proj 2 installment 1", transactionAmount: 100000},*/
    ]
}

// Global Context
export const GlobalContext = createContext(initialState);

// Global Context Provider
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}>
        {children}
      </GlobalContext.Provider>);
}