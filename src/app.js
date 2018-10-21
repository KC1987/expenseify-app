import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 500, note: 'some note' }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500, note: 'some note' }));



// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


// store.subscribe(() => {
  //   console.log('dispatch');
  // });
  
  
  console.log(visibleExpenses);


//addExpense -> Water bill
//addExpense -> gas bill
//setTextFilter -> bill 2 items, water 1 item
//getVisiBle expenses   -> print visible ones to the screen

// console.log(visibleExpenses);
// console.log(state);


const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));