
import React from 'react';
import {connect} from 'react-redux';
import * as category from '../../action/category';
import CategoryForm from '../category-form';

class Dashboard extends React.Component{
  render(){
    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return(
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((category, index) => 
            <div key={index}>
              <h2> Category: {category.name} </h2>
              <p> Category Budget: {category.budgetTotal} </p>
              <button onClick={() => categoryRemove(category)}> delete </button> 
              <CategoryForm category={category} onComplete={categoryUpdate} />
            </div>
          )}
      </div>
    );
  }
  

}


let mapStateToProps = (state) => {
  return{
    // randomObj : 'String',
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);