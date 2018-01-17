import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  render() {

    return (
      <div className='category-item'>
        <CategoryForm category={this.props.category} onComplete={this.props.categoryUpdate} />
        <div className='new-item'>
          <div className='headers'>
            <h2>Name: {this.props.category.name}</h2>
            <h2>Budget: ${this.props.category.budget}</h2>
          </div>
          <button onClick={() => this.props.categoryDestroy(this.props.category)}>delete</button>
        </div>
      </div>
    );
  }
}

export default CategoryItem;