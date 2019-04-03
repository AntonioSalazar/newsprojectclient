import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class IndependentArticleDetails extends Component {

  state = {
    individualArticle : []
  }

  getArticleById = () => {
    const {params} = this.props.match
    fetch(`http://localhost:5000/independent_articles/${params.id}`)
    .then(singleArticle => {
      singleArticle.json()
      .then(data => {
        const theArticle = data
        this.setState({
          individualArticle: theArticle
        })
      })
      .catch(err => console.log(err))
    })
  }

  componentDidMount(){
    this.getArticleById()
  }

  render() {
    let article = this.state.individualArticle;
    console.log(article);
    return (
      <div>
        <Card className="newsCard" style={{textAlign: 'left'}}>
          {
            article.map((oneArticle, index) => {
              return(
                <div key={index} className="article-card">
                  <CardImg top width="100%" src={oneArticle.imgPath} alt="Card image cap" />
                  <CardBody style={{marginBottom: "20px"}}>
                  <CardTitle><p className="title-news-card">{oneArticle.newsTitle}</p></CardTitle>
                  <CardSubtitle><p>{oneArticle.newsDescription}</p></CardSubtitle>
                  <Button style={{textDecoration: "none"}} color="danger">
                    <Link to={`/`} style={{textDecoration: "none"}}>Regreso</Link>
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

export default IndependentArticleDetails;