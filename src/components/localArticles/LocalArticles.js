import React, {Component} from "react";
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import TweetsLocal from '../TweetComponents/TweetsLocal'

class LocalArticles extends Component {

  state = {
    localArticles : []
  }

  getArticlesFromAPI = () => {
    fetch(`${process.env.REACT_APP_API_URL}/independent_articles`)
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
        <p>te gustaria reportar algun evento de tu localidad? Hazlo <Link to="/add-article">aqui</Link></p>
        <div className="articles-tweets">
          <Card className="newsCard" style={{textAlign: 'left'}}>
            {
              this.state.localArticles.map((eachArticle, index ) => {
                return(
                  <div key={index} className="article-card">
                    <CardImg top width="200px" style={{height: "450px"}} src={eachArticle.imgPath} alt="Card image cap" />
                    <CardBody style={{marginBottom: "20px"}}>
                    <h3>Reportado en: {eachArticle.location}</h3>
                    <CardTitle><p className="title-news-card">{eachArticle.newsTitle}</p></CardTitle>
                    <CardSubtitle><p>{eachArticle.newsDescription}</p></CardSubtitle>
                    <Link to={`/localArticles/${eachArticle._id}`} style={{textDecoration: "none"}}>
                      <Button color="primary">Ver articulo</Button>{' '}
                    </Link>
                    </CardBody>                
                  </div> 
                )
              })
            }
            <br/>
          </Card>  
          <TweetsLocal />
        </div>
      </div>
    )
  }
}

export default LocalArticles;