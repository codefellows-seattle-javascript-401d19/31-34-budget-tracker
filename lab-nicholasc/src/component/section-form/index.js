import React from 'react';

let emptyState = {
  title: '',
};

class SectionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.section || emptyState;

    let memberFunctions = Object.getOwnPropertyNames(SectionForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }


  handleChange(event){
    let {value} = event.target;
    this.setState({title : value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.section)
      this.setState(nextProps.section);
  }

  render() {
    let buttonText = this.props.section ? 'update section' : 'create section';

    return(
      <form
        onSubmit = {this.handleSubmit}
        className = "section-form">
        <h3>I am a forms H3</h3>
        <input
          type="text"
          name="title"
          placeholder="asdf"
        />

      </form>
    );
  }
}

export default SectionForm;
