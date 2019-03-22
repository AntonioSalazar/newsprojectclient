import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/TopTenCarousel'
import NewsOptions from './components/NewsOptions'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navAndCarousel">
          <Navbar />
          <h1 style={{textAlign: 'left', margin: '50px'}}>Ultimas Noticias:</h1>
          <Carousel style={{paddingTop: '30px'}}/>
        </div>
          <NewsOptions />
          <NewsCard />
          <Footer/>
      </div>
    );
  }
}

export default App;
