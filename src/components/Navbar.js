import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from '../assets/logo.png'
import userIcon from '../assets/userIcon.png'
import {Link} from 'react-router-dom'
  

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedInUser: null
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  }

  render() {
    if (this.state.loggedInUser) {
      return(
            <Navbar color="danger" light expand="md" fixed="top">
              <NavbarBrand ><div><a href={"/"}><img src={logo} alt={logo} style={{width: '50px', marginLeft: '40px'}}/></a></div></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <NavbarBrand>Welcome, {this.state.loggedInUser.username}</NavbarBrand>
            </Navbar>        
      )
    } else {
        return (
          <div>
                <Navbar color="danger" light expand="md" fixed="top">
                  <NavbarBrand ><div><a href={"/"}><img src={logo} alt={logo} style={{width: '50px', marginLeft: '40px'}}/></a></div></NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          <img src={userIcon} alt={userIcon} style={{width: '30px', marginRight: '40px'}}/>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            <Link to="/signup">Signup</Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link to={'/login'}>Login</Link>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Navbar>   
          </div>
        );      
    }
  }
}

export default Navigation