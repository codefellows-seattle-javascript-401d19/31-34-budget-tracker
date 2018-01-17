import React from "react";
import { connect } from "react-redux";

import * as category from "../../action/category";
import CategoryForm from "../category-form";


class CategoryItem extends React.Component {
  render() {
    let {category, categoryDestroy, categoryUpdate} = this.props;

    return (
      <div className="category-item">
        <CategoryForm onComplete={categoryUpdate} category={category}/>
        <p><strong>Category name: </strong>{category.name}</p>
        <p><strong>Budget $: </strong>{category.budget}</p>
        <button onClick={categoryDestroy.bind(null, category)}>Delete</button>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {categories:state}
};

let mapDispatchToProps = (dispatch) => {
  return{
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryDestroy: (data) => dispatch(category.destroyAction(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
