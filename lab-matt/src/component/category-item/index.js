import React from 'react';
import { connect } from 'react-redux';
import * as category from '../../action/category';
import * as expense from '../../action/expense';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';

class CategoryItem extends React.Component {
  render() {
    let category = this.props.category;
    let { categoryUpdate, categoryRemove, expenseCreate} = this.props;
    let title = category.title !== '' ? category.title : `'no title'`;

    return(
      <div>
        <h2> {title} </h2>
        <button onClick={() => categoryRemove(category)}> delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <ExpenseForm onComplete={expenseCreate} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    categories: state,
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