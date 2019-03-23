import React from 'react';

const footer = () => {

    return(
        <footer className="page-footer font-small stylish-color-dark pt-4" style={{background: "#161C27", color: 'white'}}>
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Acerca de este proyecto:</h5>
              <p>Este proyecto consume una API propia asi como LA API de <a href="https://newsapi.org/">News API</a> </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://www.linkedin.com/in/antonio-salazar-esquivel/"> Antonio Salazar</a>
        </div>
        {/* Copyright */}
      </footer>

    )
}

export default footer;