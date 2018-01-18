import React from 'react';
import { connect } from 'react-redux';
import * as category from '../../action/category';
import * as expense from '../../action/expense';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';

class CategoryItem extends React.Component {
  render() {
    let { expenses, category, categoryUpdate, categoryRemove, expenseCreate } = this.props;
    let categoryExpenseList = expenses[category.id];
    let title = category.title !== '' ? category.title : `'no title'`;

    return(
      <div>
        <h2> {title} </h2>
        <button onClick={() => categoryRemove(category)}> delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <ExpenseForm category={category} onComplete={expenseCreate} />
        {
          categoryExpenseList.map((expense, index) => {
            let price = expense.price.startsWith('-') ? expense.price.replace('-', '-$') : `$${expense.price}`;
            let title = expense.title || `'no title'`;
            return (
              <div key={index}>
                <h4> {title} | {price} </h4>
              </div>
            );
          })
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryRemove: (data) => dispatch(category.removeAction(data)),
    expenseCreate: (data) => dispatch(expense.createAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);