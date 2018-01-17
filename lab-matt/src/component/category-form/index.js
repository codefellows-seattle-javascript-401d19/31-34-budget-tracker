import React from 'react';

let emptyState = {
  title: '',
  price: 0,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.category || emptyState;

    this.handleChange = (event) => {
      let { name, value } = event.target;
      if (name === 'price' && value.match(/^-?\d*(\.\d{0,2})?$/gm)) {

        return this.setState({ [name]: value });

      } else if (name !== 'price') {
        return this.setState({ [name]: value });

      } else {
        return;
      }

    };

    this.handleSubmit = (event) => {
      event.preventDefault();

      this.props.onComplete(this.state);
      this.setState(emptyState);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category) {
      this.setState(nextProps.category);
    }
  }

  render() {
    let buttonText = this.props.category ? 'update category' : 'add category';

    return (
      <form onSubmit={this.handleSubmit} className='category-form'>
        <input onChange={this.handleChange} type="text" name='title' placeholder='title' value={this.state.title} />
        <input onChange={this.handleChange} type="text" name='price' placeholder='price' value={this.state.price} />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

export default CategoryForm;