import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='dashboard'>
        <CategoryForm />
        {
          categories.map((category, index) => {
            return <div key={index}>
              <CategoryItem />
            </div>;
          })
        }
      </div>
    );
  }
}

export default Dashboard;
