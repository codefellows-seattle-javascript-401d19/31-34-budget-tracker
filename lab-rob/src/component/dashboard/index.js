import React from 'react';
import {connect} from 'react-redux';

import * as category from '../../action/category';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

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
        <ul className='categories'>
          {categories.map(category => (
            <li key={category.id}>
              <CategoryItem  category={category} categoryDestroy={categoryDestroy} categoryUpdate={categoryUpdate} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  categories: state,
});

let mapDispatchToProps = dispatch => ({
  categoryCreate: (data) => dispatch(category.createAction(data)),
  categoryUpdate: (data) => dispatch(category.updateAction(data)),
  categoryDestroy: (data) => dispatch(category.destroyAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);