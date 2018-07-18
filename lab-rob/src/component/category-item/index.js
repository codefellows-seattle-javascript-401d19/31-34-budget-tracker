import React from 'react';

import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDestroy, categoryUpdate} = this.props;

    return (
      <div className='category-item'>
        <h2>{category.name}</h2>
        <h3>Budget: ${Number(category.budget).toLocaleString()}</h3>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <button onClick={categoryDestroy.bind(null, category)} className='destroy' >Destroy!</button>
      </div>
    );
  }
}

export default CategoryItem;