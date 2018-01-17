import React from 'react';
import CategoryForm from '../category-form';

const NoteItem = ({ category, deleteCategory, updateCategory }) => {
  return (
    <div>
      <h2>Name: {category.name}</h2>
      <h3>Budget: ${category.budget}</h3>
      <button onClick={() => deleteCategory(category)}>delete</button>
      <CategoryForm
        category={category}
        onComplete={updateCategory}
      />
    </div>
  );
};

export default NoteItem;
