import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/TopTenCarousel'
import NewsOptions from './components/NewsOptions'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import {Switch, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navAndCarousel">
          <Navbar />
          <div className="weather-widget">
            <h2 style={{textAlign: 'left', margin: '20px'}}>Ultimas Noticias:</h2>
            <div id="openweathermap-widget-4" style={{paddingTop: "15px"}}></div>            
          </div>
        </div>
        
          <Switch>
            <Route exact path="/" component={Carousel}/>
          </Switch>
          <NewsOptions />
          <Switch>
            <Route exact path="/news/:topic" component={NewsCard}/>
          </Switch>
          <Dashboard />
          <Footer/>
      </div>
    );
  }
}

export default App;
