import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expense from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    let {
      expense, 
      expenseDelete,
      expenseUpdate,
    } = this.props;

    return (
      <div className='expense-item'>
        <h2>{expense.name}</h2>
        <h2>${expense.price}</h2>
        <button onClick={() => expenseDelete(expense)}>delete</button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  expenseDelete: (data) => dispatch(expense.removeAction(data)),
  expenseUpdate: (data) => dispatch(expense.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);