import React from 'react';
import { connect } from 'react-redux';
import * as expense from '../../action/expense';
import ExpenseForm from '../expense-form';

class ExpenseItem extends React.Component {
  render() {
    let { expense, expenseUpdate, expenseRemove } = this.props;

    let price = expense.price.toString().startsWith('-') ?
      expense.price.toString().replace('-', '-$') : 
      `$${expense.price}`;
      
    let title = expense.title || `'no title'`;
    return (
      <div className='expense-item' >
        <h4> {title} | {price} </h4>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
        <button onClick={() => expenseRemove(expense)}> delete </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    expenseUpdate: (data) => dispatch(expense.updateAction(data)),
    expenseRemove: (data) => dispatch(expense.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);