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
    <div className = 'dashboard'>
      <CategoryForms/>
      {
        categories.map((category, i) => 
          <div key={i}>
            <h2> {category.name}</h2>
            <button onClick={() => categoryRemove(category)}> Delete </button>
            <CategoryForm category={category} onComplete={categoryUpdate} />
          </div>
        )}
    </div>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    categories : state,
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryRemove: (data) => dispatch(category.removeAction(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
