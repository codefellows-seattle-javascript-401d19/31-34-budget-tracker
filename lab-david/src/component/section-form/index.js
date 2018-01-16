//  inside component = sectionForm.js

import React from 'react';

let emptyState = {
  title : '',
};

class SectionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.section || emptyState;
  
    // insert binding function here

  }


  // member functions

  handleChange(event){
    let {value} = event.target;
    this.setState({ title : value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  // hoooks

  componentWillReceiveProps(nextProps){
    if(nextProps.section)
      this.setState(nextProps.section);
  }

  render(){
    let buttonText = this.props.section ? 'update' : 'create section';

    return(
      <form
      onSubmit={this.handleSubmit}
      className='section-form'>

      <input
        type='text'
        name='title'
        placeholder='title'
        value={this.state.title}
        onChange={this.handleChange}
      />

      <button type='submit'> {buttonText} </button>
      </form>
    );
  }
};

export default SectionForm;