import React from 'react';

import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDestroy, categoryUpdate} = this.props;

    return (
      <div className='category-item'>
        <h2>{category.name}</h2>
        <h3>Budget: ${category.budget}</h3>
        <button onClick={categoryDestroy.bind(null, category)} >Destroy!</button>
        <CategoryForm category={category} onComplete={categoryUpdate} />
      </div>
    );
  }
}

export default CategoryItem;