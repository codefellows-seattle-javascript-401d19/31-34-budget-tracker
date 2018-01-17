import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDestroy} = this.props;
    return (

      <div className='category-item'>
        <h2> {category.name}: ${category.budget} / {category.period} </h2>
        <CategoryForm
        category={category}
        onComplete={categoryUpdate}
        /> <button onClick={() => categoryDestroy(category)}> Delete </button>
      </div>
    );
  } 
}

export default CategoryItem;