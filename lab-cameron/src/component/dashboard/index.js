import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category';

const Dashboard = ({ categories, categoryCreate, categoryUpdate, categoryRemove }) => {
  return (
    <div className='dashboard'>
      <CategoryForm onComplete={categoryCreate} />
      {
        categories.map(category => {
          return <div key={category.id}>
            <CategoryItem
              category={category}
              deleteCategory={categoryRemove}
              updateCategory={categoryUpdate}
            />
          </div>;
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: data => dispatch(category.createAction(data)),
    categoryUpdate: data => dispatch(category.updateAction(data)),
    categoryRemove: data => dispatch(category.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
