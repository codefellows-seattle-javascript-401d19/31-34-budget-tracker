import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expenseAction from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    let {
      expense,
      expenseRemove,
      expenseUpdate,
    } = this.props;

    return (
      <div className='expense-item'>
        <h3> {expense.name} </h3>
        <p> ${expense.price} </p>
        <button onClick={() => expenseRemove(expense)}> delete </button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  expenseRemove: (data) => dispatch(expenseAction.removeAction(data)),
  expenseUpdate: (data) => dispatch(expenseAction.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);