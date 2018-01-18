import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import * as category from '../../action/categories'

class CategoryItem extends React.Component{
  render(){

    let {
      categories,
      categoryUpdate,
      categoryRemove,
      name,
      price,
    } = this.props

  return (
    <div className='categoryitem'>
        {categories.map((category, i) => (
          <div key={i}>
            <h2> {category.name}</h2>
            <h3>Budget: ${category.budget}</h3>
            <CategoryForm 
            category={category} 
            onComplete={categoryUpdate} />
       
            <ExpenseForm />             
          <button onClick={() => categoryRemove(category)}> Delete </button>
          </div>
        ))}
    </div>
    )
}
}



export default CategoryItem