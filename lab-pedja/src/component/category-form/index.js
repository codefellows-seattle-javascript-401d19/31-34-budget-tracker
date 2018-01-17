import React from "react";

let emptyState = {
  name: '',
  budget: 0
}

class CategoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.category || emptyState;

    let memberFunctions = Object.getOwnPropertyNames(CategoryForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
//--------------------------------------------------
// Member Functions
//--------------------------------------------------

  handleChange(event) {
    let{value} = event.target;
    this.setState({name : value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

//--------------------------------------------------
// Hooks
//--------------------------------------------------

  componentWillReceiveProps(nextProps) {
    if(nextProps.category)  
      this.setState(nextProps.category);
  }

//--------------------------------------------------
// Render
//--------------------------------------------------

  render() {
    let buttonText = this.props.category ? 'update category' : 'create category';

    return (
      <form onSubmit={this.handleSubmit} className="category-form">
        <input
          type="text"
          name="name"
          placeholder="category name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        {/* TODO: add budget  */}
        
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

export default CategoryForm;
