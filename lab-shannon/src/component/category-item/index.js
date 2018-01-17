import React from 'react';
import CategoryForm from '../category-form';


class CategoryItem extends React.Component{
  render(){
    return(
      this.props.categories.map((category, index) => {
        return (
          <div key={index}>
            <h4>{category.title}</h4>
            <p>{category.budget}</p>
            <button> Delete </button>
            <CategoryForm />
          </div>
        );
      })
    );
  }
}

export default CategoryItem;
