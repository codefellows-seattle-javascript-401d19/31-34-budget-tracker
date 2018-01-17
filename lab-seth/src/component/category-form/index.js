import React from 'react';

let emptyState = {
  name: '',
  budget: 0,
};

class CategoryForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.category || emptyState;

    let memberFunctions = Object.getOwnPropertyNames(CategoryForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event){
    let {name, value} = event.target;
    console.log(name, value);
    
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category)
      this.setState(nextProps.category);
  }


  render() {
    let buttonText = this.props.category ? 'update category' : 'create category';

    return (
      <form
        onSubmit={this.handleSubmit}
        className='category-form'>

        <input
          type='text'
          name='name'
          placeholder='Budget Name'
          value={this.state.name}
          onChange={this.handleChange}
          required
        />

        <input
          type='number'
          name='budget'
          placeholder='Budget Limit, Whole Dollars($) Only'
          value={this.state.budget}
          onChange={this.handleChange}
          required

        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

export default CategoryForm;