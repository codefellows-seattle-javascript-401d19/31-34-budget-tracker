import React from 'react';

let emptyState = {
  name: '',
  price: 0,
};

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.category || emptyState;

    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }


  handleChange(event){
    let {name, value} = event.target;
    this.setState({[name] : value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category)
      this.setState(nextProps.category);
  }

  render() {
    let buttonText = this.props.category ? 'update category' : 'create category';
    let nameText = this.props.category ? this.props.category.name : 'Category Form';

    return(
      <form
        onSubmit = {this.handleSubmit}
        className = "expense-form">

        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          required={true}
        />
        <input
          type="number"
          name="budget"
          placeholder="$0"
          value={this.state.budget}
          onChange={this.handleChange}
          required={true}
        />
        <button onClick={this.handleSubmit}> {buttonText} </button>

      </form>
    );
  }
}

export default ExpenseForm;
