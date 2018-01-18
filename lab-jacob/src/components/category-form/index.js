import React from 'react'

let emptyState = {
  name: '',
  budget: '',
}

class CategoryForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.category || emptyState

    let memberFunctions = Object.getOwnPropertyNames(CategoryForm.prototype)
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName]=this[functionName].bind(this)
      }
    }
  }
  
  handleChange(event){
    let {name, value} = event.target
    this.setState({[name]:value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.category)
      this.setState(nextProps.category)
  }

  render(){
    console.log('====================================');
    console.log('THIS IS THE STATE IN THE CATEGORY FORM', this.state);
    console.log('====================================');
    console.log('====================================');
    console.log('THIS IS THE PROPS IN THE CATEGORY FORM', this.props);
    console.log('====================================');
    let buttonText = this.props.category ? 'update' : 'create'

    return(
      <form onSubmit={this.handleSubmit}
      className='category-form'>
      
      <input 
        type='text'
        name = 'name'
        placeholder = 'category name'
        value={this.state.name}
        onChange={this.handleChange}
      />
       <input 
        type='text'
        name = 'budget'
        placeholder = 'category budget'
        value={this.state.budget}
        onChange={this.handleChange}
      />
      <button type='submit'> {buttonText} </button>
      </form>
    )
  }
}

export default CategoryForm