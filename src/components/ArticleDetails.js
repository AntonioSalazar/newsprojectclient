import React, {Component} from "react";
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from "react-router-dom";
// import NewsOptions from './NewsOptions'


class ArticleDetails extends Component {

  state = {
    theArticle : []
  }

  componentDidMount(){
    this.getArticleByTitle()
  }

  getArticleByTitle = () => {
    const {params} = this.props.match
    fetch(`https://newsapi.org/v2/top-headlines?country=mx&category=${params.topic}&apiKey=8631d37e5233459cb78edcb073b174ff`)
    .then(responseFromAPI => {
      // console.log(responseFromAPI);  --> Response {type: "cors", url: "https://newsapi.org/v2/top-headlines?country=mx&ca…echnology&apiKey=8631d37e5233459cb78edcb073b174ff", redirected: false, status: 200, ok: true, …}
      responseFromAPI.json()
      .then(jsonWithArticles => {
        const theArticles = jsonWithArticles.articles
        const singleArticle = theArticles.filter(title => {
          return title.title === params.title
        })
        this.setState({
          theArticle: singleArticle
        })
      })
      .catch(err => console.log(err))
    })
  }

  render(){
    const {params} = this.props.match
    return(
      <div>
        {/* <NewsOptions /> */}
        <Card className="newsCard" style={{textAlign: 'left'}}>
          {
            this.state.theArticle.map((oneArticle, index) => {
               return(
                <div key={index} className="article-card">
                  <CardImg top width="100%" src={oneArticle.urlToImage} alt="Card image cap" />
                  <CardBody style={{marginBottom: "20px"}}>
                  <CardTitle><p className="title-news-card">{oneArticle.title}</p></CardTitle>
                  <CardSubtitle><p>{oneArticle.description}</p></CardSubtitle>
              
                  <Button color="primary">Ver noticia completa</Button>{' '}
                  <Link to={`/news/${params.topic}`} style={{textDecoration: "none"}}>
                    <Button color="primary">Regresar</Button>{' '}
                  </Link>
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

export default ArticleDetails;