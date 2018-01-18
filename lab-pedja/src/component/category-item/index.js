import React from "react";
import { connect } from "react-redux";

import CategoryForm from "../category-form";
import ExpenseForm from "../expense-form";
import Expense from "../expense-item";

import * as category from "../../action/category";
import * as expense from "../../action/expense";


class CategoryItem extends React.Component {
  render() {
    let {
      category, 
      categoryDestroy, 
      categoryUpdate, 
      expenses,
      expenseCreate,
    } = this.props;

    let categoryExpenses = expenses[category.id];

    return (
      <div className="category-item">
        <button onClick={categoryDestroy.bind(null, category)}>Delete</button>
        <p><strong>Category name: </strong>{category.name}</p>
        <p><strong>Budget $: </strong>{category.budget}</p>
        <CategoryForm onComplete={categoryUpdate} category={category} />
        <ExpenseForm onComplete={expenseCreate} category={category} />

        {
          categoryExpenses.map((expense, index) => <Expense expense={expense} key={index}/>)
        }
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    expenses : state.expenses,
  }
};

let mapDispatchToProps = dispatch => {
  return{
    categoryUpdate: data => dispatch(category.updateAction(data)),
    categoryDestroy: data => dispatch(category.destroyAction(data)),
    expenseCreate: data => dispatch(expense.createAction(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
