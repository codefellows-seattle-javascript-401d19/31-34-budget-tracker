import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import * as categoryActions from '../../action/category';

class CategoryItem extends React.Component{
  render(){
    let {
      category,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return(
      <div className='category-item'>
        <h2> Category: {category.name} </h2>
        <h2> Budget: ${category.budget} </h2>
        <button className="deleteButton" onClick={() => categoryRemove(category)}> delete </button>
        <CategoryForm category={category} processCategory={categoryUpdate} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {...state};
};

let mapDispatchToProps = (dispatch) => {
  return{
    categoryUpdate: (data) => dispatch(categoryActions.updateAction(data)),
    categoryRemove: (data) => dispatch(categoryActions.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
