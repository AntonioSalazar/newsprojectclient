import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/TopTenCarousel'
import NewsOptions from './components/NewsOptions'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import {Switch, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import DashboardArticle from "./components/DashboardArticle"
import ArticleDetails from './components/ArticleDetails';
import Signup from './components/auth/Signup'
import AuthService from './components/auth/auth-service';
import Login from './components/auth/Login'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {loggedInUser : null}
    this.service = new AuthService();
  }




  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        })
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        })
      })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return(
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>

            <Route exact path="/" render={() => (
                <div>
                  <Carousel />
                <hr/>
                  <NewsOptions />
                <hr/>
                  <Dashboard />
                </div>
              )}/> 
  
              <Route exact path="/:topic" component={NewsCard}/>
              <Route exact path="/:topic/:title" component={ArticleDetails} />
              <Route exact path="/news/dashboard/:title" component={DashboardArticle} />
          </Switch>
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>

            <Route exact path="/" render={() => (
              <div>
                <Carousel />
              <hr/>
                <NewsOptions />
              <hr/>
                <Dashboard />
              </div>
            )}/> 
            <Route path="/signup" render={() => 
            <div>
              <Signup getUser={this.getTheUser}/>
            </div>
            }/>


            <Route path="/login" render={() => <Login getUser={this.getTheUser}/>} />
            <Route exact path="/:topic" component={NewsCard}/>
            <Route exact path="/:topic/:title" component={ArticleDetails} />
            <Route exact path="/news/dashboard/:title" component={DashboardArticle} />

          </Switch>

          <Footer />

        </div>
      )
    }
  }
}

export default App;














        // <div className="App">

        //   <div className="navAndCarousel">
        //     <Navbar/>
        //     <div className="weather-widget">
        //       <h2 style={{textAlign: 'left', margin: '20px'}}>Ultimas Noticias:</h2>
        //       <div id="openweathermap-widget-4" style={{paddingTop: "15px"}}></div>            
        //     </div>
        //   </div>

        //   <Route exact path="/" render={() => (
        //       <div>
        //       <Carousel />
        //       <hr/>
        //       <NewsOptions />
        //       <hr/>
        //       <Dashboard />
        //       </div>
        //   )}/> 

        //   <Switch>
        //     <Route exact path="/" render={ () => (
        //       <div>
        //         <Carousel />
        //         <hr/>
        //         <NewsOptions />
        //         <hr/>
        //         <Dashboard />
        //       </div>
        //     )} />
        //     <Route  exact path="/:topic" component={NewsCard}/>
        //     <Route  exact path="/:topic/:title" component={ArticleDetails}/>
        //     <Route  path="/news/dashboard/:title" component={DashboardArticle} />
        //   </Switch>
        // </div>    