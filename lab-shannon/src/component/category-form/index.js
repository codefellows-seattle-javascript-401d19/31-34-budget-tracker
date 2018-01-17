import React from 'react';

let emptyState = {
  title: '',
  budget: 0,
};

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.category ? this.props.category : emptyState;
    console.log(this.props, `props in form`);
    console.log(this.state, `state in form`);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event){
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category){
      this.setState(nextProps.category);
    }
  }

  render(){
    let buttonText = this.props.category ? 'Update Category' : 'Add Category';
    return(
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.label}
          placeholder='label'
          onChange={this.handleChange}
        />
        <input
          type='number'
          step='.01'
          name='budget'
          value={this.state.budget}
          placeholder='budget'
          onChange={this.handleChange}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

export default CategoryForm;
