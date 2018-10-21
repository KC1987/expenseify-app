import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <h1><ExpenseList /></h1>
  </div>
);



export default ExpenseDashboardPage;