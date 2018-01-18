import React from 'react';
import ExpenseForm from '../expense-form';
import * as expenseActions from '../../action/expense';
import { connect } from 'react-redux';

let emptyState = {};

class ExpenseItem extends React.Component{
  render(){
    let {
      expenseDestroy,
      expenseUpdate,
    } = this.props;

    return(
      this.props.expenses.map((expense, index) => {
        return(
          <div key={index}>
            <p>{expense.name}: ${expense.price}</p>
            <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
            <button onClick={() => expenseDestroy(expense)}>Delete Expense</button>
          </div>
        );
      })
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {
    expenseDestroy: (data) => {dispatch(expenseActions.destroy(data));},
    expenseUpdate: (data) => {dispatch(expenseActions.update(data));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
