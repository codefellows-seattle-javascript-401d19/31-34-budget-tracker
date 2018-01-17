import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component{

  render(){
    return(
      <div>
        <h4>{this.props.category.title}</h4>
        <p>{this.props.category.budget}</p>
        <button> Delete </button>
        <CategoryForm />
      </div>
    );
  }
}

export default CategoryItem;
