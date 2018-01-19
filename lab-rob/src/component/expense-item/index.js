import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import {updateAction, destroyAction} from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    let {
      expense,
      expenseDestroy,
      expenseUpdate,
    } = this.props;

    return (
      <div className='expense-item'>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
        <button onClick={expenseDestroy.bind(null, expense)} className='destroy'>Remove Expense</button>
        <h3>{expense.name}</h3>
        <h4>Price: ${Number(expense.price).toLocaleString()}</h4>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (data) => dispatch(updateAction(data)),
  expenseDestroy: (data) => dispatch(destroyAction(data)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);