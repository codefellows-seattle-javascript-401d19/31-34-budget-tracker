import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expense from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    let {
      expense,
      expenseRemove,
      expenseUpdate,
    } = this.props;

    return (
      <div className='expense'>
        <h4> {expense.name} </h4>
        <h4> ${expense.amount} </h4>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
        <button className='delete-button' onClick={() => expenseRemove(expense)}>remove this expense</button>
      </div>
    );
  }

}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => ({
  expenseRemove: (data) => dispatch(expense.removeAction(data)),
  expenseUpdate: (data) => dispatch(expense.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);