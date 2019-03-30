import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom"

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '', 
      email: '',
      password: '' 
    };
    this.service = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;

    this.service.signup(username, email, password)
    .then( response => {
      this.setState({
        username: "",
        email: "",
        password: ""
      });
      this.props.getUser(response)
    })
    .catch(err => console.log(err))
  }

  handleChange = e => {
    const {value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit} className="signup-form">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input type="text" name="username" value={this.state.username} placeholder="Nombre de usuario..." onChange={e => this.handleChange(e)}/>

          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={e => this.handleChange(e)} />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={this.state.password} placeholder="Contrasena" onChange={e => this.handleChange(e)}/>

          <input type="submit" value="Signup!" className="submit-btn" style={{marginTop: '10px'}}/>
        </form>
        <div style={{marginBottom: "30px"}}>
            <p>Already have an account?</p>
            <Link to={"/login"} >Login</Link>            
        </div>

      </div>
    )
  }
}

export default Signup;