import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';


class CategoryItem extends React.Component {
  render() {
    let {
      expenses,
      category,
      expenseCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    let categoryExpenses = expenses[category.id];

    return(
      <div className='category-item'>
        <h2 className='item-text'> {category.name} </h2>
        <h2 className='item-text'> ${category.budget} </h2>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <button className='delete-button' onClick={() => categoryRemove(category)}> delete </button>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        {
          categoryExpenses.map(expense =>
            <ExpenseItem expense={expense} key={expense.id}/>
          )
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  expenses: state.expenses,
});

let mapDispatchToProps = (dispatch) => ({
  expenseCreate: (data) => dispatch(expenseActions.createAction(data)),
  categoryUpdate: (data) => dispatch(categoryActions.updateAction(data)),
  categoryRemove: (data) => dispatch(categoryActions.removeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);