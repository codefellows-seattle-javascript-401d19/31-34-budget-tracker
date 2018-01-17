import React from 'react';
import CategoryForm from '../category-form';


class CategoryItem extends React.Component{
  render(){
    return(
      this.props.categories.map((category, index) => {
        return (
          <div key={index}>
            <h4>Category Title: {category.title}</h4>
            <p>Budget: ${category.budget}</p>
            <button onClick={this.props.categoryDestroy}> Delete </button>
            <CategoryForm category={category} onComplete={this.props.categoryUpdate}/>
          </div>
        );
      })
    );
  }
}

export default CategoryItem;
