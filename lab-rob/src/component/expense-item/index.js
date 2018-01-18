import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import * as expenseActions from '../../action/expense';

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
        <h3>{expense.name}</h3>
        <h4>Price: ${Number(expense.price).toLocaleString()}</h4>
        <button onClick={expenseDestroy.bind(null, expense)} className='destroy'>Destroy!</button>
      </div>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (data) => dispatch(expenseActions.updateAction(data)),
  expenseDestroy: (data) => dispatch(expenseActions.destroyAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);