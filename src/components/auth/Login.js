import React, {Component} from 'react';
import AuthService from './auth-service';
import {Link, Redirect} from 'react-router-dom';
import Swal from 'sweetalert2'

 

class Login extends Component {
    constructor(props){
      super(props);
      this.state = { 
        username: '', 
        password: '',
        redirect: false 
      };
      this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
        .then( response => {
            this.setState({ username: "", password: "", redirect: true});
            this.props.getUser(response)
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: `Bienvenido ${response.username}`,
              showConfirmButton: false,
              timer: 1500
            })
        })
        .catch( error => Swal.fire(
          'Algo salio mal',
          'Verifica tus datos',
          'question'
        ) )
  
      }

      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }




      render(){
        if (this.state.redirect) {
          return <Redirect to  ="/" />
        } else {
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
}
export default Login;