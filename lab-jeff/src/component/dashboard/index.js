import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category';

class Dashboard extends React.Component {
  render() {
    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return (
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />
        <div className="categories">
          {
            categories.map((category, i) =>
              <CategoryItem category={category} key={i} />
            )
          }
        </div>
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
    categoryRemove: (data) => dispatch(category.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);