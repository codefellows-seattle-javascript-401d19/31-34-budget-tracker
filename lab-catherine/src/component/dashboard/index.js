import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import * as category from '../../action/category';

class Dashboard extends React.Component {
  render() {
    let {
      categories, 
      categoryCreate,
      categoryUpdate,
      categoryDestroy,
    } = this.props;

    return (
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((category, index) => 
            <div key={index}>
              <h2>{category.name}</h2>
              <button onClick={() => categoryDestroy(category)}>delete</button>
              <CategoryForm category={category} onComplete={categoryUpdate} />
            </div>
          )
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(category.createAction(data)),
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryDestroy: (data) => dispatch(category.destroyAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);