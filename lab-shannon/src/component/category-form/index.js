import React from 'react';

let emptyState = {
  title: '',
};

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    // this.state = this.props.category || emptyState;
    this.state = this.props.category ? this.props.category : emptyState;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event){
  }

  onSubmit(event){
    event.preventDefault();
  }

  render(){
    let buttonText = this.props.category ? 'Update Category' : 'Add Category';
    return(
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          placeholder='title'
          onChange={this.handleChange}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

export default CategoryForm;
