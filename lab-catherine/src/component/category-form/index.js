import './_category-form.scss';
import React from 'react';

let emptyState = {
  name: '',
  budget: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || emptyState;

    let memberFunctions = Object.getOwnPropertyNames(CategoryForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleNameChange({target: { value: name }}) {
    this.setState({ name });
  }

  handleBudgetChange({target: { value: budget }}) {
    this.setState({ budget });
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
    const {
      handleSubmit,
      handleNameChange,
      handleBudgetChange,
      state: {name, budget},
    } = this;

    let buttonText = this.props.category ? 'update category' : 'create category';

    return (
    
      <form
        onSubmit={handleSubmit}
        className='category-form'>

        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={handleNameChange}
        />

        <input
          type='number'
          name='budget'
          placeholder='budget'
          value={budget}
          onChange={handleBudgetChange}
        />
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;