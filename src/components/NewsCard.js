import React, {Component} from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

class NewsCard extends Component {
  state = {
    theNews: []
  }

  componentDidMount(){
    this.getNewsFromTopic()
  }

  getNewsFromTopic = () => {
    const {params} = this.props.match
    fetch(`https://newsapi.org/v2/top-headlines?country=mx&category=${params.topic}&apiKey=8631d37e5233459cb78edcb073b174ff`)
    .then(responseFromAPI => {
      responseFromAPI.json()
      .then(data => {
        const theNews = data.articles
        this.setState({
          theNews
        })
      })
      .catch(err => console.log(err))
    })
  }

  render(){
    const {params} = this.props.match
    return(
      <div style={{marginTop: "20px", paddingBottom: "20px"}}>
        <Card className="newsCard" style={{textAlign: 'left'}}>
          {
            this.state.theNews.map((oneArticle, index) => {
              if (oneArticle.urlToImage === null) {
                return oneArticle.urlToImage = logo
              }
               return(
                <div key={index} className="article-card">
                  <CardImg top width="100%" src={oneArticle.urlToImage} alt="Card image cap" />
                  <CardBody style={{marginBottom: "20px"}}>
                  <CardTitle><p className="title-news-card">{oneArticle.title}</p></CardTitle>
                  <CardSubtitle><p>{oneArticle.description}</p></CardSubtitle>
                  <Button style={{textDecoration: "none"}} color="danger">
                    <Link to={`/news/${params.topic}/${oneArticle.title}`} style={{textDecoration: "none"}}>Articulo Completo</Link>
                  </Button> 
                  </CardBody>                
                </div> 
             )
            })
          }
          <br/>
        </Card>
      </div>   
         
    )
  }
}

export default NewsCard;