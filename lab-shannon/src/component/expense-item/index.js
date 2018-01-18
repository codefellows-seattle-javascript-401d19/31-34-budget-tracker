import React from 'react';
import ExpenseForm from '../expense-form';

let emptyState = {};

class ExpenseItem extends React.Component{
  render(){
    return(
      <div>
        <p>Expense Item</p>
        <ExpenseForm onComplete={this.props.expenseUpdate}/>
      </div>
    );
  }
}

export default ExpenseItem;
