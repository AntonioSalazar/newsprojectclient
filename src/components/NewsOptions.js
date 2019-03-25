import React from 'react';
import { Nav } from 'reactstrap';
// import {Link} from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class newsOptions extends React.Component {
  render() {
    return (
      <div >
        <Nav className='newsOptions'>
          {/* <Link to='news/business'><p>Negocios</p></Link> 
          <Link to='news/technology'><p>Tecnologia</p></Link> 
          <Link to='news/security'><p>Seguridad</p></Link> 
          <Link to='news/sports'> <p>Deporte</p> </Link> 
          <Link disabled to='news/articles'> <p>Nota Roja</p> </Link> */}
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="news/business">Negocios</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="news/technology">Tecnologia</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="news/sports">Deportes</BreadcrumbItem>
            <BreadcrumbItem active tag="span" href="news/articles">Nota Roja</BreadcrumbItem>
          </Breadcrumb>
        </Nav>
      </div>
    );
  }
}


export default newsOptions;