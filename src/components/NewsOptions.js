import React from 'react';
import { Nav } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from "react-router-dom"

class newsOptions extends React.Component {
  render() {
    return (
      <div >
        <Nav className='newsOptions'>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/news/science">Ciencia</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/news/technology">Tecnologia</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/news/sports">Deportes</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/localArticles">Reportes Locales</BreadcrumbItem>
          </Breadcrumb>
        </Nav>
      </div>
    );
  }
}


export default newsOptions;