import React from 'react'
import { connect } from 'react-redux'
import expenseAction from '../../action/expense'


class ExpenseForm extends React.Component{
  constructor(props) {
    super(props)

    this.state = { name : '' , price : ''}

    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype)
    for(let functionName of memberFunctions){
      if (functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this)
      }
    }
  }
  
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value,
    })
  }

  render(){
    let buttonText = this.props.expense ? 'update expense' : 'create'

    return(
      <form 
        type='expense-form'
        onSubmit={() => this.props.handleSubmit(this.state)}
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

let mapDispatchToProps = (dispatch) => ({
  handleSubmit: expense => dispatch(expenseAction(expense))
})

export default connect(null, mapDispatchToProps)(ExpenseForm)