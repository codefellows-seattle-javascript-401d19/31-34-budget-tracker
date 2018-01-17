import React from 'react';
import CategoryForm from '../category-form';


class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryRemove} = this.props;
    return(
      <div className='category-item'>
        <h2 className='item-text'> {category.name} </h2>
        <h2 className='item-text'> ${category.budget} </h2>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <button className='delete-button' onClick={() => categoryRemove(category)}> delete </button>
      </div>
    );
  }
}

export default CategoryItem;