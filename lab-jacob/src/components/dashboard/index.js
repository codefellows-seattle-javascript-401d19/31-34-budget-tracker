import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'
import * as category from '../../action/categories'

class Dashboard extends React.Component{
  render(){

    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props
  

  return (
    <div className = 'dashboard'>
      <CategoryForm onComplete={categoryCreate} />
      {
        categories.map(category => {
          return <div key={category.id}>
          <CategoryItem 
            category={category}
            categories={categories}
            deleteCategory={categoryRemove}
            updateCategory={categoryUpdate}
          />
          </div>
        })
      }
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
    categoryCreate: (data) => dispatch(category.createAction(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
