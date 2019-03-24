import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/TopTenCarousel'
import NewsOptions from './components/NewsOptions'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import {Switch, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navAndCarousel">
          <Navbar />
          <h1 style={{textAlign: 'left', margin: '50px'}}>Ultimas Noticias:</h1>
        </div>
          <Switch>
            <Route exact path="/" component={Carousel}/>
          </Switch>
          <NewsOptions />
          <Switch>
            <Route exact path="/news/:topic" component={NewsCard}/>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default App;
