import React from 'react';
import autoBind from '../../lib/auto-bind';

let emptyState = {
  name: '',
  budget: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || emptyState;

    autoBind(this, CategoryForm);
  }

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.category)
      this.setState(nextProps.category);
  }

  render() {
    let buttonText = this.props.category ? 'Update' : 'Create';

    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          placeholder='Category name...'
          value={this.state.name}
          onChange={this.handleChange}
          required='required' />

        <input
          type='number'
          name='budget'
          placeholder='Budget...'
          value={this.state.budget}
          onChange={this.handleChange} 
          required='required' />

        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;