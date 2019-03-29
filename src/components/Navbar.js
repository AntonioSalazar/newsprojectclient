import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import AuthService from './auth/auth-service';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }

  render(){
    if (this.state.loggedInUser) {
      return(
        <nav className="navbar-styles" sticky="top" >
          <ul className="logo-signup-login">
            <li>
              <Link to="/">
                <img src={logo} alt={logo} style={{width: "100"}}/>
              </Link>
            </li>
            <li>Hola {this.state.loggedInUser.username}</li>
            <li>
              <Link to='/logout'>
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
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
        </div>
      )
    }
  }
}

export default Navbar;