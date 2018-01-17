import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import * as category from '../../action/categories'

class CategoryItem extends React.Component{
  render(){

    let {
      categories,
      categoryUpdate,
      categoryRemove,
    } = this.props
  
  return (
    <div className = 'categoryitem'>
      <CategoryForm/>
      {
        categories.map((category, i) => {
          <div key={i}>
            <h2> {category.name}</h2>
            <h3>Budget: ${category.budget}</h3>
            <CategoryForm 
            category={category} 
            onComplete={categoryUpdate} />
<button onClick={() => categoryRemove(category)}> Delete </button>
          </div>
          }
        )}
      
    </div>
    )
  }
}



export default CategoryItem
