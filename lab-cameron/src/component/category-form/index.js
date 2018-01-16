import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

const emptyState = {
  id: uuidv1(),
  timestamp: new Date(),
  name: '',
  budget: 0,
};

class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.category || emptyState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category) {
      this.setState(nextProps.category);
    }
  }

  render() {
    const buttonText = this.props.category ? 'update category' : 'create category';
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='budget'
          placeholder='budget'
          onChange={this.handleChange}
        />
        <button type='submit'>{ buttonText }</button>
      </form>
    );
  }
}

export default CategoryForm;
