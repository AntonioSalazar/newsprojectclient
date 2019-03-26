import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/TopTenCarousel'
import NewsOptions from './components/NewsOptions'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import {Switch, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import ArticleDetails from "./components/ArticleDetails"

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
        <NewsOptions />
          <Switch>
            <Route exact path="/" render={ () => (
              <div>
                <Carousel />
                <Dashboard />
              </div>
            )} />
          </Switch>
          <Switch>
            <Route exact path="/:topic" component={NewsCard}/>
            <Route exact path="/news/:topic/:title" component={ArticleDetails} />
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default App;
