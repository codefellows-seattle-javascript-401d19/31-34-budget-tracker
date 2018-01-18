import React from 'react';
import ExpenseForm from '../expense-form';
import * as expenseActions from '../../action/expense';
import { connect } from 'react-redux';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing: false};
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(expense){
    this.props.expenseUpdate(expense);
    this.setState({editing: false});
  }

  render(){
    let {
      expenseDestroy,
      expenseUpdate,
    } = this.props;

    return(
      this.props.expenses.map((expense, index) => {
        let editingJSX = <ExpenseForm expense={expense} onComplete={this.handleUpdate}/>;
        let nonEditingJSX = <h4><em>{expense.name}:</em> ${expense.price}</h4>;
        let shownJSX = this.state.editing ? editingJSX : nonEditingJSX;

        return(
          <main key={index} onDoubleClick={() => this.setState({editing: true})}>
            <div>
              {shownJSX}
              <button onClick={() => expenseDestroy(expense)}>Delete Expense</button>
            </div>
          </main>
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
