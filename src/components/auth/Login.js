import React, {Component} from 'react';
import AuthService from './auth-service';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props){
      super(props);
      this.state = { username: '', password: '' };
      this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
        .then( response => {
            this.setState({ username: "", password: "" });
            this.props.getUser(response)
        })
        .catch( error => console.log(error) )
      }

      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }

      render(){
        return(
          <div className="login-form">
            <form onSubmit={this.handleFormSubmit} className="styles-login-form">
              <label>Email:</label>
              <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)} placeholder="Email"/>
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)}  placeholder="Contrasena"/>
              
              <input type="submit" value="Login" className="submit-btn" style={{marginTop: '10px'}}/>
            </form>
            <p>No tienes cuenta? 
                <Link to={"/signup"}> Signup</Link>
            </p>
          </div>
        )
      }
}
export default Login;