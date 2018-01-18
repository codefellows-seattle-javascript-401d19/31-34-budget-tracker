import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';


class CategoryItem extends React.Component {
  render() {
    const {
      expenses,
      category,
      expenseCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    const categoryExpenses = expenses[category.id];
    const header = categoryExpenses.length ? <h2>Current Expenses:</h2> : null;


    return(
      <div className='category-item'>
        <h2 className='item-text'> {category.name} </h2>
        <h2 className='item-text'> ${category.budget} </h2>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <button className='delete-button' onClick={() => categoryRemove(category)}>Delete This Category</button>
        <h3>Add Expense</h3>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        {header}
        {
          categoryExpenses.map(expense =>
            <ExpenseItem expense={expense} key={expense.id}/>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: (data) => dispatch(expenseActions.createAction(data)),
  categoryUpdate: (data) => dispatch(categoryActions.updateAction(data)),
  categoryRemove: (data) => dispatch(categoryActions.removeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);