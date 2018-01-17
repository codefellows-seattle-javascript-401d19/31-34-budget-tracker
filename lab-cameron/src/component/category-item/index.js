import React from 'react';
import CategoryForm from '../category-form';

const CategoryItem = ({ category, deleteCategory, updateCategory }) => {
  return (
    <div id='item'>
      <h2>Name: {category.name}</h2>
      <h3>Budget: ${category.budget}</h3>
      <CategoryForm
        category={category}
        onComplete={updateCategory}
      />
      <button onClick={() => deleteCategory(category)}>delete</button>
    </div>
  );
};

export default CategoryItem;
