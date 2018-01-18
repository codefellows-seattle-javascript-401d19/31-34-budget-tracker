import React from 'react';

let emptyState = {
  name: '',
  price: 0,
};

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.expense || emptyState;
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let {name, value} = event.target;
    this.setState({[name] : value});
  }

  onSubmit(event){
    event.preventDefault();
    let categoryID = this.props.category.id;
    this.props.onComplete({...this.state, categoryID});
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.expense){
      this.setState(nextProps.expense);
    }
  }

  render(){
    let buttonText = this.props.expense ? 'Update Expense' : 'Add Expense';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='expense name'
          onChange={this.handleChange}
        />
        <input
          type='number'
          step='.01'
          name='price'
          value={this.state.price}
          placeholder='price'
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
