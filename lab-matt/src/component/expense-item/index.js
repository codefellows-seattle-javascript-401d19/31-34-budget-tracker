import React from 'react';
import { connect } from 'react-redux';
import * as expense from '../../action/expense';
import ExpenseForm from '../expense-form';

class ExpenseItem extends React.Component {
  render() {
    let expense = this.props.expense;
    let { expenseUpdate, expenseRemove } = this.props;
    let title = expense.title !== '' ? expense.title : `'no title'`;

    return(
      <div>
        <h2> {title} | ${expense.price}</h2>
        <button onClick={() => expenseRemove(expense)}> delete </button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    expenses: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    expenseUpdate: (data) => dispatch(expense.updateAction(data)),
    expenseRemove: (data) => dispatch(expense.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);