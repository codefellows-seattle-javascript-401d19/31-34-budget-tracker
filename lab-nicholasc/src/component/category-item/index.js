import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing : false};

    let memberFunctions = Object.getOwnPropertyNames(CategoryItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleUpdate(category){
    this.props.categoryUpdate(category);
    this.setState({editing : false});
  }
  
  render(){
    let {
      category,
      categoryRemove,
      categoryUpdate} = this.props;

    return(
      <div key={category.id}>
        <h2>{category.name} || budget: ${category.budget}</h2>
        <button onClick={() => categoryRemove(category)}> delete </button>
        <CategoryForm category={category} handleComplete={this.handleUpdate} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  expenses : state.expenses,
});

let mapDispatchToProps = (dispatch) => ({
  expenseCreate : (data) => dispatch(expenseActions.createAction(data)),
  categoryUpdate : (data) => dispatch(categoryActions.updateAction(data)),
  categoryRemove : (data) => dispatch(categoryActions.removeAction(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
