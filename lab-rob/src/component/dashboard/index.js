import './dashboard.scss';

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
      categoryClear,
    } = this.props;

    return (
      <div className='dashboard'>
        <button className='clear-all' onClick={categoryClear}>Clear All</button>
        <CategoryForm onComplete={categoryCreate} />
        <ul className='categories'>
          {categories.map(category => (
            <li key={category.id}>
              <CategoryItem category={category} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  categories: state.categories,
});

let mapDispatchToProps = dispatch => ({
  categoryCreate: (data) => dispatch(category.createAction(data)),
  categoryUpdate: (data) => dispatch(category.updateAction(data)),
  categoryDestroy: (data) => dispatch(category.destroyAction(data)),
  categoryClear: (data) => dispatch(category.clearAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);