import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import * as category from '../../action/category';

class Landing extends React.Component{
  render(){
    let {
      categorys,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return(
      <div className="landing">
        <h1> Budget Tracking Form </h1>
        <CategoryForm handleComplete={categoryCreate} />
        {
          categorys.map((category, i) =>
            <div key={i}>
              <h2>{category.name} || budget: ${category.budget}</h2>
              <button onClick={() => categoryRemove(category)}> delete </button>
              <CategoryForm category={category} handleComplete={categoryUpdate} />
            </div>
          )
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    categorys: state,
  };
};
let mapDispatchToProps = (dispatch) => {
  return{
    categoryCreate: (data) => dispatch(category.createAction(data)),
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryRemove: (data) => dispatch(category.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing); //TODO: remove this: this takes what we need from the store and sets it up in the propsso we can use it in the landing constructor
