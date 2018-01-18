import React from 'react';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import * as expense from '../../action/expense';
import { connect } from 'react-redux';


class CategoryItem extends React.Component{
  render(){
    let {
      expenses,
      expenseCreate,
      expenseUpdate,
    } = this.props;

    return(
      this.props.categories.map((category, index) => {
        return (
          <div key={index}>
            <h4>Category: {category.label}</h4>
            <p>Budget: ${category.budget}</p>
            <button onClick={() => this.props.categoryDestroy(category)}> Delete </button>
            <CategoryForm category={category} onComplete={this.props.categoryUpdate}/>
            <ExpenseForm category={category} onComplete={this.props.expenseCreate}/>
            <ExpenseItem expenseUpdate={this.props.expenseUpdate}/>
          </div>
        );
      })
    );
  }
}

let mapStateToProps = (state) => {
  return {expenses: state.expenses};
};

let mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: (data) => {dispatch(expense.create(data));},
    expenseUpdate: (data) => {dispatch(expense.update(data));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
