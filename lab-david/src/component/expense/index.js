import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expense from '../../action/expense';

class Expense extends React.Component{
  render(){
    let {
      expense,
      expenseRemove,
      expenseUpdate,
    } = this.props;

    return(
      <div className='expense'>
        <p>{expense.name}</p>
        <p>{expense.price}</p>
        <button onClick={() => expenseRemove(expense)}> delete expense </button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  expenseRemove : (data) => dispatch(expense.removeAction(data)),
  expenseUpdate : (data) => dispatch(expense.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);