import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component{
  render(){
    let {
      category,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return(
      <div className='category-item'>
        <h2> Category: {category.name} </h2>
        <h2> Budget: ${category.budget} </h2>
        <button className="deleteButton" onClick={() => categoryRemove(category)}> delete </button>
        <CategoryForm category={category} processCategory={categoryUpdate} />
      </div>
    );
  }
}

export default CategoryItem;
