import React from 'react';

let emptyState = {
  title: '',
  price: 0,
};

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.expense || emptyState;

    this.handleChange = (event) => {
      let { name, value } = event.target;
      return this.setState({ [name]: value });
    };

    this.handleSubmit = (event) => {
      event.preventDefault();

      this.props.onComplete(this.state);
      this.setState(emptyState);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expense) {
      this.setState(nextProps.expense);
    }
  }

  render() {
    let buttonText = this.props.expense ? 'update expense' : 'add expense';

    return (
      <form onSubmit={this.handleSubmit} className='expense-form'>
        <input onChange={this.handleChange} type="text" name='title' placeholder='title' value={this.state.title} />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;