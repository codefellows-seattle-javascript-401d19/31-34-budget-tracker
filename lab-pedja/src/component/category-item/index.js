import React from "react";
import { connect } from "react-redux";

import CategoryForm from "../category-form";
import ExpenseForm from "../expense-form";
import Expense from "../expense-item";

import * as category from "../../action/category";
import * as expense from "../../action/expense";


class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { editing : false}

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(category){
    this.props.categoryUpdate(category);
    this.setState({ editing : false });
  }
  
  render() {
    let {
      category, 
      categoryDestroy, 
      categoryUpdate, 
      expenses,
      expenseCreate,
    } = this.props;

    let categoryExpenses = expenses[category.id];

    let editingJSX = <CategoryForm onComplete={this.handleUpdate} category={category} />;
    let contentJSX =
      <div>
        <button className="delete" onClick={categoryDestroy.bind(null, category)}> X </button>
        <h3>{category.name}</h3>
        <p>${category.budget}</p>
      </div>
    let renderJSX = this.state.editing ? editingJSX : renderJSX;

    return (
      <div className="category-item">
        {renderJSX}
        <ExpenseForm onComplete={expenseCreate} category={category} />
        <main className="expense-container">
          {
            categoryExpenses.map((expense, index) => 
              <Expense expense={expense} key={index}/>
            )
          }
        </main>
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
