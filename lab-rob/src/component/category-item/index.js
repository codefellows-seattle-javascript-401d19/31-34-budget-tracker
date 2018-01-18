import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import {updateAction, destroyAction} from '../../action/category';
import {createAction, clearAction} from '../../action/expense';

class CategoryItem extends React.Component {
  render() {
    let {
      category,
      categoryDestroy,
      categoryUpdate,
      expenseCreate,
      expenseClear,
    } = this.props;

    let expenses = this.props.expenses[category.id];

    return (
      <div className='category-item'>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <h2>Category: {category.name}</h2>
        <h3>Budget: ${Number(category.budget).toLocaleString()}</h3>
        <button onClick={categoryDestroy.bind(null, category)} className='destroy' >Remove Category</button>
        <ExpenseForm categoryId={category.id} onComplete={expenseCreate} />
        {expenses.length > 0 ? 
          <div className='expenses'>
            <h2>Expenses</h2>
            <button onClick={expenseClear.bind(null, category.id)}>Remove Expenses</button>
            <ol>
              {expenses.map(expense => (
                <li key={expense.id}>
                  <ExpenseItem expense={expense} />
                </li>
              ))}
            </ol>
          </div> : null
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  expenses: state.expenses,
});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (data) => dispatch(updateAction(data)),
  categoryDestroy: (data) => dispatch(destroyAction(data)),
  expenseCreate: (data) => dispatch(createAction(data)),
  expenseClear: (data) => dispatch(clearAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);