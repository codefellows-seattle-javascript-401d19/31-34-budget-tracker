import React from 'react'

let emptyState = { name : '' , price : ''}

class ExpenseForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = props.expense || emptyState

    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype)
    for(let functionName of memberFunctions){
      if (functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this)
      }
    }
  }
  
  handleChange(event){
    this.setState({
      name : event.target.value,
      price : event.target.value,
    })
  }
  handleSubmit(event){
    event.preventDefault()
    let categoryID = this.props.category ? this.props.category.id : this.props.expense.categoryID

    this.props.onComplete({
      ...this.state,
      categoryID,
    })
    this.setState(emptyState)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.expense)
      this.setState(nextProps.expense)
  }
  render(){
    let buttonText = this.props.expense ? 'update expense' : 'create'

    return(
      <form 
        type='expense-form'
        onSubmit={this.handleSubmit}
      >
      <input 
        type='text'
        name='name'
        placeholder='name'
        value={this.state.name}
        onChange={this.handleChange}
      />
      <input 
        type='text'
        name='price'
        placeholder='price'
        value={this.state.price}
        onChange={this.handleChange}
      />

      <button type='submit'>{buttonText}</button>
      
      </form>
    )
  }
}

export default ExpenseForm