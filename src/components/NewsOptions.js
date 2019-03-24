import React from 'react';
import { Nav } from 'reactstrap';
import {Link} from "react-router-dom"

class newsOptions extends React.Component {
  render() {
    return (
      <div >
        <Nav className='newsOptions'>
          <Link to='news/business'><p>Negocios</p></Link> 
          <Link to='news/technology'><p>Tecnologia</p></Link> 
          <Link to='news/security'><p>Seguridad</p></Link> 
          <Link to='news/sports'> <p>Deporte</p> </Link> 
          <Link disabled to='news/articles'> <p>Nota Roja</p> </Link>
        </Nav>
      </div>
    );
  }
}


export default newsOptions;