import React from 'react';
import CategoryForm from '../category-form';
import * as categoryActions from '../../action/category';
import * as expenseActions from '../../action/expense';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDestroy, categoryUpdate, expenses, expenseCreate} = this.props;

    let categoryExpenses = expenses[category.id];

    return (
      <div className='category-item'>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <div className='new-item'>
          <div className='headers'>
            <h2>Name: {category.name}</h2>
            <h2>Budget: ${category.budget}</h2>
          </div>
          <button onClick={() => categoryDestroy(category)}>delete</button>
          <ExpenseForm category={category} onComplete={expenseCreate} />
          {
            categoryExpenses.map((expense, index) => <ExpenseItem  key={index} expense={expense} />
            )}
        </div>
      </div>
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
  categoryDestroy: (data) => dispatch(categoryActions.removeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);