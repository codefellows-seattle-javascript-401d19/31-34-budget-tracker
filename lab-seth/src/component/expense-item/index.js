import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form'
import * as expense from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    let {
      expense, // this is coming from the actual props
      expenseRemove,
      expenseUpdate,
    } = this.props;

    return (

      <div className='expense-item'>
        <p> {expense.name}: ${expense.price} </p>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
        <button onClick={() => expenseRemove(expense)}> Delete This Expense </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  expenseRemove: (data) => dispatch(expense.removeAction(data)),
  expenseUpdate: (data) => dispatch(expense.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);