import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Dashboard extends Component {

  state = {
    allNews: []
  }

  componentDidMount(){
    this.allNews()
  }

  allNews = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=mx&apiKey=8631d37e5233459cb78edcb073b174ff")
    .then(newFromAPI => {
      newFromAPI.json()
      .then(data => {
        const Articles = data.articles
        const firstArticles = Articles.slice(0, 10)
        this.setState({
          allNews: firstArticles
        })
      })
      .catch(err => console.log(err))
    })
  }

  render(){
    return(
      <div>
        <Card className="newsCard" style={{textAlign: 'left'}}>
          {
            this.state.allNews.map((oneArticle, index) => {
               return(
                <div key={index} className="article-card">
                  <CardImg top width="100%" src={oneArticle.urlToImage} alt="Card image cap" />
                  <CardBody style={{marginBottom: "20px"}}>
                  <CardTitle><p className="title-news-card">{oneArticle.title}</p></CardTitle>
                  <CardSubtitle><p>{oneArticle.description}</p></CardSubtitle>
                  <Button style={{textDecoration: "none"}} color="danger">
                    <Link to={`/news/${oneArticle.title}`} style={{textDecoration: "none"}}>Articulo Completo</Link>
                  </Button> 
                  </CardBody>   
                  <br/>               
                </div>
             )
            })
          }
        </Card>
      </div>
    )
  }
}

export default Dashboard;
