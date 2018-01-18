import React from 'react';
import ExpenseForm from '../expense-form';

let emptyState = {};

class ExpenseItem extends React.Component{
  render(){
    console.log(this.props.expenses);
    return(
      this.props.expenses.map((expense, index) => {
        return(
          <div key={index}>
            <p>Expense Item</p>
            <ExpenseForm onComplete={this.props.expenseUpdate}/>
          </div>
        );
      })
    );
  }
}

export default ExpenseItem;
