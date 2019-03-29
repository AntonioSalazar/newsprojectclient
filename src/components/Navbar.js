import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  }

  render(){
    if (this.state.loggedInUser) {
      return(
        <nav className="navbar-styles">
          <ul className="logo-signup-login">
            <li>
              <Link to="/">
                <img src={logo} alt={logo} style={{width: "100"}}/>
              </Link>
            </li>
            <li>Signed in as {this.state.loggedInUser.username}</li>
          </ul>
        </nav>
      )
    } else {
      return (
        <div >
          <nav className="navbar-styles">
            <ul className="logo-signup-login">
              <li>
                <Link to="/">
                  <img src={logo} alt={logo} />
                </Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>  
        </div>
      )
    }
  }
}

export default Navbar;