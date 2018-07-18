import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';

class CategoryItem extends React.Component {
  render() {
    let {
      expenses,
      category,
      expenseCreate,
      categoryUpdate,
      categoryDestroy
    } = this.props;

    let categoryExpenses = expenses[category.id];

    return (

      <div className='category-item'>
        <div>
          <h2> {category.name}: ${category.budget} / {category.period} </h2>
          <CategoryForm category={category} onComplete={categoryUpdate} />
          <button onClick={() => categoryDestroy(category)}> Delete This Category</button>
        </div>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        {
          categoryExpenses.map((expense, index) => 
            <ExpenseItem key={index} expense={expense} />)
        }
      </div>
    );
  } 
}


let mapStateToProps = (state) => ({
  expenses : state.expenses,
});

let mapDispatchToProps = (dispatch) => ({
  expenseCreate: (data) => dispatch(expenseActions.createAction(data)),
  categoryRemove: (data) => dispatch(categoryActions.removeAction(data)),
  categoryUpdate: (data) => dispatch(categoryActions.updateAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
