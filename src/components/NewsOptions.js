import React from 'react';
import { Nav } from 'reactstrap';
import {Link} from "react-router-dom"

class newsOptions extends React.Component {
  render() {
    return (
      <div >
        <Nav className='newsOptions'>
          <Link to='news/business'><p>Negocios</p></Link> 
          <Link to='/politics'><p>Politica</p></Link> 
          <Link to='/security'><p>Seguridad</p></Link> 
          <Link to='/sports'> <p>Deporte</p> </Link> 
          <Link disabled to='/articles'> <p>Nota Roja</p> </Link>
        </Nav>
      </div>
    );
  }
}


export default newsOptions;