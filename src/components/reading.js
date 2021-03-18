import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reading extends Component {

  constructor() {
    super();
    this.state = {
      question: '',
    };
  }

  handleChange = event => {
    this.setState({
      question: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReading(this.state)
    this.setState({question: ""})
  }

  render() {
    return(
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p className="Form-Input">
            <label>Ask A Question</label>
            <textarea
          type="text"
          onChange={this.handleChange} value={this.state.question}/>
          </p>
          <input type="submit" />
       </form>

   );
  }
};

const mapDispatchToProps = dispatch => {
    return {
      addReading: formData => dispatch({ type: 'ADD_READING', payload: formData })
    };
  };

export default connect(null, mapDispatchToProps)(Reading); 