import React from 'react';
import CategoryForm from '../category-form';
import * as category from '../../action/category';
import { connect } from 'react-redux';

class CategoryItem extends React.Component {

  render() {
    let { category, categoryRemove, categoryUpdate } = this.props;
    return (
      <li className="category-item">
        <CategoryForm onComplete={categoryUpdate} category={category} />
        <p> Title: {category.name} </p>
        <p> Budget: ${category.budget} </p>
        <button onClick={() => { categoryRemove(category); }}> Delete </button>
      </li>
    );


  }
}

let mapStateToProps = (state) => {
  //vinicio - I'm creating props in landing
  return {
    //! vinicio - cats : 'This con be ANYTHING',
    sections: state,
  };
};

let mapDispatchToProps = (dispatch) => ({
  categoryUpdate: (data) => dispatch(category.updateAction(data)),
  categoryRemove: (data) => dispatch(category.removeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);