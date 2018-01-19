import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';

class CategoryItem extends React.Component{
  render(){
    let {
      category,
      categoryRemove,
      categoryUpdate} = this.props;

    return(
      <div key={category.id}>
        <h2>{category.name} || budget: ${category.budget}</h2>
        <button onClick={() => categoryRemove(category)}> delete </button>
        <CategoryForm category={category} handleComplete={categoryUpdate} />
      </div>
    );
  }
}

export default CategoryItem;
