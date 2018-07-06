import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category';

class Dashboard extends React.Component{
  render(){
    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return(
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />
        {categories.map((category, i) =>
          <CategoryItem key={i} category={category}/>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return{
    categories : state.categories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return{
    categoryCreate: (data) => dispatch(category.createAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
