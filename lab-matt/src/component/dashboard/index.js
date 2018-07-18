import React from 'react';
import { connect } from 'react-redux';
import * as expense from '../../action/expense';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class Dashboard extends React.Component {
  render() {
    let { expenses, expenseCreate } = this.props;
    return (
      <div className='dashboard'>
        <ExpenseForm onComplete={expenseCreate} />
        {
          expenses.map((expense, index) => {
            return <div key={index}>
              <ExpenseItem expense={expense} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);