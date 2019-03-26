import React from 'react';
import { Nav } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class newsOptions extends React.Component {
  render() {
    return (
      <div >
        <Nav className='newsOptions'>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/business">Negocios</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/technology">Tecnologia</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/sports">Deportes</BreadcrumbItem>
            <BreadcrumbItem active tag="span" href="/articles">Nota Roja</BreadcrumbItem>
          </Breadcrumb>
        </Nav>
      </div>
    );
  }
}


export default newsOptions;