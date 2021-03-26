import React from 'react'
import {connect} from 'react-redux'  

class Login extends React.Component {
 
    constructor() {
        super();
        this.state = {
          username: '',
          password: ''
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
      body: JSON.stringify({user: this.state})
  }

  fetch(`http://localhost:3000/api/v1/users`, config)
      .then(res => res.json())
      .then(res => {
       
          sessionStorage.setItem("token", res.jwt)
          this.setState({username: "", password: ""})
      })
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
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
          <label>password</label>
            <input
          type="password"
          onChange={this.handlePasswordChange} value={this.state.password}/>
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