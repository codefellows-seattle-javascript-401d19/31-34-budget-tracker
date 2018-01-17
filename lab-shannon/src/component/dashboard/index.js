import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category';

class Dashboard extends React.Component{
  render(){
    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryDestroy,
    } = this.props;

    return(
      <div>
        <CategoryForm onComplete={categoryCreate}/>
        <CategoryItem categories={categories} categoryDestroy={categoryDestroy} categoryUpdate={categoryUpdate}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {categories : state.categories};
};

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => {dispatch(category.create(data));},
    categoryUpdate: (data) => {dispatch(category.update(data));},
    categoryDestroy: (data) => {dispatch(category.destroy(data));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
