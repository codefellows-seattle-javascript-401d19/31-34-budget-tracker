import React from 'react';
import { connect } from 'react-redux';
import * as expense from '../../action/expense';
import ExpenseForm from '../expense-form';

class Dashboard extends React.Component {
  render() {
    let { expenses, expenseCreate, expenseUpdate, expenseRemove } = this.props;
    return (
      <div className='dashboard'>
        <ExpenseForm onComplete={expenseCreate} />
        {
          expenses.map((expense, index) => {
            let title = expense.title !== '' ? expense.title : `'no title'`;
            return <div key={index}>
              <h2> {title} | ${expense.price}</h2>
              <button onClick={() => expenseRemove(expense)}> delete </button>
              <ExpenseForm expense={expense} onComplete={expenseUpdate} />
            </div>;
          })
        }
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
    expenseCreate: (data) => dispatch(expense.createAction(data)),
    expenseUpdate: (data) => dispatch(expense.updateAction(data)),
    expenseRemove: (data) => dispatch(expense.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);