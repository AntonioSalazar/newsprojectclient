import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import AuthService from './auth/auth-service';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }


  render(){
    if (this.state.loggedInUser) {
      return(
        <div>
          <nav className="navbar-styles" sticky="top" >
            <ul className="logo-signup-login">
              <li>
                <Link to="/">
                  <img src={logo} alt={logo} />
                </Link>
              </li>
              <li>
                Hola {this.state.loggedInUser.username} !
              </li>
            </ul>
          </nav>
          <div className="weather-widget">
              <h2 style={{textAlign: 'left', margin: '20px'}}>Ultimas Noticias:</h2>
              <div id="openweathermap-widget-4" style={{paddingTop: "15px"}}></div>            
            </div>
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
              <li>
                <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link>
              </li>
            </ul>
          </nav>  
            <div className="weather-widget">
              <h2 style={{textAlign: 'left', margin: '20px'}}>Ultimas Noticias:</h2>
              <div id="openweathermap-widget-4" style={{paddingTop: "15px"}}></div>            
            </div>
        </div>
      )      
    }
  }
}

export default Navbar;