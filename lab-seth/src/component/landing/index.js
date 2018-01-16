import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import SectionForm from '../category-form';
import * as category from '../../action/category';

class Landing extends React.Component{
  render() {
    let {
      categorys,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return (
      <div className='landing'>
        <SectionForm onComplete={categoryCreate} />
        {
          categorys.map((categoryRemove,index) => 
            <div key={index}>
              <h2> {category.title} </h2>
              <button onClick={() => categoryRemove(categoryRemove)}> Delete </button>
              <SectionForm category={category} onComplete={categoryUpdate} />
            </div>
          )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  //creating props in landing
  return {
    categorys : state,
  }
};

let mapDispatchToProps = (dispatch) => {
  // Creating props in landing that allow us to create update and remove
  return {
    categoryCreate: (data) => dispatch(category.createAction(data)),
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryRemove: (data) => dispatch(category.removeAction(data)),
  }
};

//this is the connection to the store, this is a curried function
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
