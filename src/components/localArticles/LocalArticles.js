import React, {Component} from "react";
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from "react-router-dom";

class LocalArticles extends Component {

  state = {
    localArticles : []
  }

  getArticlesFromAPI = () => {
    fetch("http://localhost:5000/independent_articles")
    .then(newFromAPI => {
      newFromAPI.json()
      .then(data => {
        this.setState({
          localArticles: data
        })
      })
      .catch(err => console.log(err))
    })
  }

  componentDidMount(){
    this.getArticlesFromAPI()
  }

  render(){
    return(
      <div>
        <Card className="newsCard" style={{textAlign: 'left'}}>
          {
            this.state.localArticles.map((eachArticle, index ) => {
              return(
                <div key={index} className="article-card">
                  <CardImg top width="200px" src={eachArticle.imgPath} alt="Card image cap" />
                  <CardBody style={{marginBottom: "20px"}}>
                  <CardTitle><p className="title-news-card">{eachArticle.newsTitle}</p></CardTitle>
                  <CardSubtitle><p>{eachArticle.newsDescription}</p></CardSubtitle>
                  <Button style={{textDecoration: "none"}} color="danger">
                    <Link to={`/localArticles/${eachArticle._id}`} style={{textDecoration: "none"}}>Articulo Completo</Link>
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

export default LocalArticles;