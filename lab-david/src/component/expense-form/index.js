import React from 'react';

let emptyState = {
  name : '',
  expenseTotal : '',
};

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.expense || emptyState;
    //-------------------------------------------------------------
    // Binding function
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //-------------------------------------------------------------
  // member functions
  //-------------------------------------------------------------
  handleNameChange(event){
    let {value} = event.target;
    this.setState({ name : value });
  }

  handleExpenseTotalChange(event){
    let {value} = event.target;
    this.setState({ ExpenseTotal : value });
  }

  handleSubmit(event){
    event.preventDefault();
    let expenseID = this.props.expense ? this.props.expense.id : this.props.expense.categoryID;

    this.props.onComplete({
      ...this.state,
      expenseID,
    });

    this.setState(emptyState);
  }

  //-------------------------------------------------------------
  // HOOKS
  //-------------------------------------------------------------

  componentWillReceiveProps(nextProps){
    if(nextProps.expense)
      this.setState(nextProps.expense);
  }

  render(){
    let buttonText = this.props.expense ? 'update expense' : 'create expense';

    return(
      <form
        className='expense-form'
        onSubmit={this.handleSubmit}
      >

        <input
          type='text'
          name='name'
          placeholder='Expense'
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <input
          type='number'
          name='expenseTotal'
          placeholder='Price'
          value={this.state.expenseTotal}
          onChange={this.handleExpenseTotalChange}
        />

        <button type='submit'> {buttonText} </button>

      </form>
    );

  }

}

export default ExpenseForm;