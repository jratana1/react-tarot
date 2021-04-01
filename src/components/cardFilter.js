import React from 'react'
import {connect} from 'react-redux'  
import { filter } from "../actions/counterAction";

class CardFilter extends React.Component {
 
    constructor() {
        super();
        this.state = {
          query: '',
        };
      }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    debugger
    this.props.filter(this.state)

  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  }

  render(){
    return(
      <div className="filter" style={{width: "200px", height: "75px", margin: "auto"}}>
          <form onSubmit={ event => this.handleSubmit(event) }>
          <p className="Form-Input">
            <label>search</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.query}/>
          </p>
          <input type="submit" />
       </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (query) => dispatch(filter(query))
  }
}


export default connect(null, mapDispatchToProps)(CardFilter)