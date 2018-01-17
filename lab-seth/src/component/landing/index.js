import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import * as category from '../../action/category';

class Landing extends React.Component{
  render() {
    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryDestroy,
    } = this.props;

    return (
      <div className='landing'>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((category,index) => 
            <div key={index}>
              <h2> {category.name} </h2>
              <button onClick={() => categoryDestroy(category)}> Delete </button>
              <CategoryForm category={category} onComplete={categoryUpdate} />
            </div>
          )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  //creating props in landing
  return {
    categories : state,
  }
};

let mapDispatchToProps = (dispatch) => {
  // Creating props in landing that allow us to create update and remove
  return {
    categoryCreate: (data) => dispatch(category.createAction(data)),
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryDestroy: (data) => dispatch(category.removeAction(data)),
  }
};

//this is the connection to the store, this is a curried function
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
