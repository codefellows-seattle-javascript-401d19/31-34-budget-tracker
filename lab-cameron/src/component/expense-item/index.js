import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expenseActions from '../../action/expense';

const ExpenseItem = ({ expense, expenseRemove, expenseUpdate }) => {
  return (
    <div>
      <h2>{expense.name}</h2>
      <h3>Price: ${expense.price}</h3>
      <ExpenseForm expense={expense} onComplete={expenseUpdate} />
      <button onClick={() => expenseRemove(expense)}>delete</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  expenseRemove: data => dispatch(expenseActions.removeAction(data)),
  expenseUpdate: data => dispatch(expenseActions.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
