import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import * as category from '../../action/category';
import * as expenseActions from '../../action/expense';

class CategoryItem extends React.Component {
  render() {
    let {
      category,
      categoryDestroy,
      categoryUpdate,
      expenseCreate,
    } = this.props;

    let expenses = this.props.expenses[category.id];

    return (
      <div className='category-item'>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <h2>Category: {category.name}</h2>
        <h3>Budget: ${Number(category.budget).toLocaleString()}</h3>
        <button onClick={categoryDestroy.bind(null, category)} className='destroy' >Destroy!</button>
        <ExpenseForm categoryId={category.id} onComplete={expenseCreate} />
        {expenses.length > 0 ? <ol className='expenses'>
          {expenses.map(expense => (
            <li key={expense.id}>
              <ExpenseItem expense={expense} />
            </li>
          ))}
        </ol> : null}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  expenses: state.expenses,
});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (data) => dispatch(category.updateAction(data)),
  categoryDestroy: (data) => dispatch(category.destroyAction(data)),
  expenseCreate: (data) => dispatch(expenseActions.createAction(data)),
});

// TODO: what about clear for expenses? Need to fix that action

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);