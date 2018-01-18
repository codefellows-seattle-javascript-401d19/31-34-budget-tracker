import React from 'react';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';
import { connect } from 'react-redux';


class CategoryItem extends React.Component{
  render(){
    let {
      expenses,
      expenseCreate,
      expenseUpdate,
      categories,
      categoryDestroy,
      categoryUpdate,
    } = this.props;

    // let categoryExpenses = expenses[categories.id];
    // console.log(categories.id, `category`);
    return(
      categories.map((category, index) =>
        <div key={index}>
          <h4>Category: {category.label}</h4>
          <p>Budget: ${category.budget}</p>
          <button onClick={() => this.props.categoryDestroy(category)}> Delete </button>
          <CategoryForm category={category} onComplete={categoryUpdate}/>
          <ExpenseForm category={category} onComplete={expenseCreate}/>
          <ExpenseItem expenses={expenses[category.id]} expenseUpdate={expenseUpdate}/>
        </div>
      )
    );
  }
}

let mapStateToProps = (state) => {
  return {expenses: state.expenses};
};

let mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: (data) => {dispatch(expenseActions.create(data));},
    expenseUpdate: (data) => {dispatch(expenseActions.update(data));},
    categoryDestroy: (data) => {dispatch(categoryActions.destroy(data));},
    categoryUpdate: (data) => {dispatch(categoryActions.update(data));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
