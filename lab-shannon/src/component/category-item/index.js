import React from 'react';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';
import { connect } from 'react-redux';
import './category-item.scss';


class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing : false};
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(category){
    this.props.categoryUpdate(category);
    this.setState({editing : false});
  }

  render(){
    let {
      expenses,
      expenseCreate,
      categories,
      categoryDestroy,
      categoryUpdate,
    } = this.props;

    return(
      categories.map((category, index) => {
        let editingJSX = <CategoryForm category={category} onComplete={this.handleUpdate}/>;
        let nonEditingJSX =
        <div>
          <h2>Category: {category.label}</h2>
          <h3><em>Budget:</em> ${category.budget}</h3>
        </div>;
        let shownJSX = this.state.editing ? editingJSX : nonEditingJSX;

        return(
          <main key={index} onDoubleClick={() => this.setState({editing : true})}>
            <div className='category-item'>
              {shownJSX}
              <button onClick={() => this.props.categoryDestroy(category)}> Delete Category </button>
              <ExpenseForm category={category} onComplete={expenseCreate}/>
              <ExpenseItem expenses={expenses[category.id]}/>
            </div>
          </main>
        );
      })
    );
  }
}

let mapStateToProps = (state) => {
  return {expenses: state.expenses};
};

let mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: (data) => {dispatch(expenseActions.create(data));},
    categoryDestroy: (data) => {dispatch(categoryActions.destroy(data));},
    categoryUpdate: (data) => {dispatch(categoryActions.update(data));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
