import React from 'react';

import CategoryForm from './category-form';

class CategoryItem extends React.Component{
  render(){
    let {
      category,
      categoryRemove,
      categoryUpdate} = this.props;

    return(
      <div key={category.id}>
        <h2>{category.name} || budget: ${category.budget}</h2>
        <button onClick={() => categoryRemove(category)}> delete </button>
        <CategoryForm category={category} handleComplete={categoryUpdate} />
      </div>
    );
  }
}

export default CategoryItem;
