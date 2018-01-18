import React from "react";
import { connect } from "redux";
import ExpenseForm from "../expense-form";
import * as expense from '../../action/expense';

class Expense extends React.Component {
  render(){
    let {
      expense,
      expenseDestroy,
      expenseUpdate,
    } = this.props;

    return (
      <div className="expense-item">
        <ExpenseForm onComplete={expenseUpdate} expense={expense}/>
        <p><strong>Expense name: </strong>{expense.name}</p>
        <p><strong>Price $: </strong>{expense.price}</p>
        <button onClick={expenseDestroy.bind(null, expense)}>Delete</button>
      </div>
    );
  }
}

let mapStateToProps = state => ({});

let mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expense.destroyAction(data)),
  expenseUpdate: data => dispatch(expense.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);