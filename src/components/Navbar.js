import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import AuthService from './auth/auth-service';
import NewsOptions from './NewsOptions'
import {Button} from 'reactstrap'

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () => {
    this.service.logout()
    .then(() => {
      this.setState({loggedInUser: null})
      this.props.getUser(null)
    })
  }


  render(){
    if (this.state.loggedInUser) {
      return(
        <div>
          <nav className="navbar-styles" >
            <ul className="logo-signup-login">
              <li>
                <Link to="/">
                  <img src={logo} alt={logo} />
                </Link>
              </li>
              <li>
                Hola {this.state.loggedInUser.username} !
              </li>
              <li>
                <Link to="/">
                  <Button onClick={() => this.logoutUser()} color="primary">Logout</Button>{' '}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="weather-widget">
            <h2 style={{textAlign: 'left', margin: '20px'}}>Bienvenido {this.state.loggedInUser.username}, puedes elegir una categoria:</h2>
            <div id="openweathermap-widget-4" style={{paddingTop: "15px"}}></div>
          </div>
            <NewsOptions/>    
        </div>
      )
    } else {
     return (
        <div >
          <nav className="navbar-styles" sticky="top">
            <ul className="logo-signup-login">
              <li>
                <Link to="/">
                  <img src={logo} alt={logo} />
                </Link>
              </li>
              <div className='login-signup-btn'>
              <li>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                  <Button color="primary">Login</Button>{' '}
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  <Button color="primary">Signup</Button>{' '}
                </Link>
              </li>
              </div>
            </ul>
          </nav>  
            <div className="weather-widget">
              <h2 style={{textAlign: 'left', margin: '20px'}}>Las ultimas noticias todo el tiempo:</h2>
              <div id="openweathermap-widget-4" style={{paddingTop: "15px"}}></div>            
            </div>
            <NewsOptions />
        </div>
      )      
    }
  }
}

export default Navbar;