import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';

const CategoryItem = ({ expenses, category, expenseCreate, categoryRemove, categoryUpdate }) => {
  const categoryExpenses = expenses[category.id];

  return (
    <div id='item'>
      <h2>{category.name}</h2>
      <h3>Budget: ${category.budget}</h3>
      <CategoryForm
        category={categoryUpdate}
        onComplete={categoryRemove}
      />
      <button onClick={() => categoryRemove(category)}>delete</button>
      <h2>Expense Name:</h2>
      <h3>Price:</h3>
      <ExpenseForm category={category} onComplete={expenseCreate} />
      {
        categoryExpenses.map(expense => {
          return <div key={expense.id}>
            <ExpenseItem expense={expense} />;
          </div>;
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: state.expense,
  };
};

const mapDispatchToProps = dispatch => ({
  expenseCreate: data => dispatch(expenseActions.createAction(data)),
  categoryUpdate: data => dispatch(categoryActions.updateAction(data)),
  categoryRemove: data => dispatch(categoryActions.removeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
