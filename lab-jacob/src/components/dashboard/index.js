import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import * as category from '../../action/categories'

class Dashboard extends React.Component{
  render(){

    let {
      categories,
      categoryCreate,
    } = this.props
  

  return (
    <div className = 'dashboard'>
      <CategoryForm onComplete={categoryCreate} />
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
