// inside landing folder = index.js

import React from 'react';
import {connect} from 'react-redux';
import * as category from '../../action/category';
import CategoryForm from './category-form';

class Landing extends React.Component{
  render(){
    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return(
      <div className='landing'>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((category, index) => 
            <div key={index}>
              <h2> {category.title} </h2>
              <button onClick={() => categoryCreate(category)}> delete </button> 
              <categoryForm category={category} onComplete={categoryUpdate} />
            </div>
          )}
      </div>
    );
  }
  

}


let mapStateToProps = (state) => {
  return{
    cats : 'Gregor and The Hound',
    categories : state,
  }
};


let mapDispatchToProps = (dispatch) => {
  return{
    categoryCreate : (data) => dispatch(category.createAction(data)),
    categoryUpdate : (data) => dispatch(category.updateAction(data)),
    categoryRemove : (data) => dispatch(category.removeAction(data)),

  }
};

// this connects the above two functions to the store
// takes original function and renames it as Landing (curried function)
export default connect(mapStateToProps, mapDispatchToProps)(Landing);