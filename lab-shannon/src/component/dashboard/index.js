import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';

class Dashboard extends React.Component{
  render(){
    return(
      <CategoryForm />
    );
  }
}

let mapStateToProps = (state) => {
  return {categories : state};
};
let mapDispatchToProps = (dispatch) => {
  return {
    // categoryCreate:
    // categoryUpdate:
    // categoryDestroy:
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
