import React from 'react'
import {connect} from 'react-redux'  

class Login extends React.Component {
 
    constructor() {
        super();
        this.state = {
          username: '',
        };
      }

  handleSubmit = event => {
    event.preventDefault();

    let config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
  }
  
  fetch(`http://localhost:3000/api/v1/users`, config)
      .then(res => res.json())
      .then(res => {
          this.setState({username: ""})
      })
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  render(){
    return(
      <div className="login-page" style={{width: "200px", height: "50vh",margin: "auto", marginTop: "10vh"}}>
          <form onSubmit={ event => this.handleSubmit(event) }>
          <p className="Form-Input">
            <label>username</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.username}/>
          </p>
          <input type="submit" />
       </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUser: () => dispatch(fetchUser())
  }
}


export default connect(null, mapDispatchToProps)(Login)