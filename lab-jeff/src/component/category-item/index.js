import React from 'react';
import CategoryForm from '../category-form';
import * as categoryActions from '../../action/category';
import * as expenseActions from '../../action/expense';
import { connect } from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';

class CategoryItem extends React.Component {
  render() {
    let { category, categoryRemove, categoryUpdate, expenses, expenseCreate } = this.props;

    let categoryExpenses = expenses[category.id];

    return (
      <li className="category-item">
        <CategoryForm onComplete={categoryUpdate} category={category} />
        <h2> Title: {category.name} </h2>
        <p> Budget: ${category.budget} </p>
        <button onClick={() => { categoryRemove(category); }}> Delete </button>
        <ExpenseForm category={category} onComplete={expenseCreate} />

        {
          categoryExpenses.map((expense, i) => <ExpenseItem expense={expense} key={i} />)
        }
      </li>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

let mapDispatchToProps = (dispatch) => ({
  expenseCreate: (data) => dispatch(expenseActions.createAction(data)),
  categoryUpdate: (data) => dispatch(categoryActions.updateAction(data)),
  categoryRemove: (data) => dispatch(categoryActions.removeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);