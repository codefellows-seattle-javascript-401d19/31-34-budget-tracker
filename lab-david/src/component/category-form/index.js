
import React from 'react';

let emptyState = {
  title : '',
};

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.category || emptyState;
  
    // insert binding function here

  }


  // member functions

  handleChange(event){
    let {value} = event.target;
    this.setState({ title : value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  // hoooks

  componentWillReceiveProps(nextProps){
    if(nextProps.category)
      this.setState(nextProps.category);
  }

  render(){
    let buttonText = this.props.category ? 'update' : 'create category';

    return(
      <form
      onSubmit={this.handleSubmit}
      className='category-form'>

      <input
        type='text'
        name='title'
        placeholder='title'
        value={this.state.title}
        onChange={this.handleChange}
      />

      <button type='submit'> {buttonText} </button>
      </form>
    );
  }
};

export default CategoryForm;