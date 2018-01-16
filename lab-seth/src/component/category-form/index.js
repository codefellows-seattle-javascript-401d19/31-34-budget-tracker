import React from 'react';

let emptyState = {
  name: '',
  budget: 0,
};

class SectionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.category || emptyState;

    let memberFunctions = Object.getOwnPropertyNames(SectionForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event){
    let { name, value } = event.target;

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
          value={this.state.title}
          onChange={this.handleChange}
          required='true'
        />

        <input
          type='number'
          name='budget'
          placeholder='Budget Limit, Whole Dollars($) Only'
          value={this.state.title}
          onChange={this.handleChange}
          require='true'

        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

export default SectionForm;