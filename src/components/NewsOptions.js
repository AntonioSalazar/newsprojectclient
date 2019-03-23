import React from 'react';
import { Nav, NavLink } from 'reactstrap';

class newsOptions extends React.Component {
  render() {
    return (
      <div className='newsOptions'>
        <Nav>
          <NavLink href='/general'><p>General</p></NavLink> 
          <NavLink href={'/politics'}><p>Politica</p></NavLink> 
          <NavLink href={'/security'}><p>Seguridad</p></NavLink> 
          <NavLink href={'/sports'}> <p>Deporte</p> </NavLink> 
          <NavLink disabled href={'/articles'}> <p>Nota Roja</p> </NavLink>
        </Nav>
      </div>
    );
  }
}


export default newsOptions;