import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class IndependentArticleDetails extends Component {

  state = {
    independentAricles: []
  }

  componentDidMount(){
    this.getArticleById()
  }

  getArticleById = () => {
    const {params} = this.props.match
    fetch(`${process.env.REACT_APP_API_URL}/independent_articles/${params.id}`)
    .then(responseFromAPI => {
      responseFromAPI.json()
      .then(jsonWithArticles => {
        const articles = jsonWithArticles
        this.setState({
          independentAricles: articles
        })
      })
    })
    .catch(err => console.log(err))
  }



  render() {
    const {imgPath, newsTitle, newsContent, location, author} = this.state.independentAricles
    return (
      <div>
        <Card className='newsCard' style={{textAlign: 'left'}}>
                <div>
                  <CardImg top width='100%' src={imgPath} alt='Card image cap'/>
                  <CardBody style={{marginBottom: '20px'}}>
                  <h3>Reportado en: {location}</h3>
                    <CardTitle><p className="title-news-card">{newsTitle}</p></CardTitle>
                    <CardSubtitle><p>{newsContent}</p></CardSubtitle>
                    <Link to="/localArticles">
                      <Button color="primary">Regresar</Button>{' '}
                    </Link>
                  </CardBody>
                </div>
        </Card>
      </div>
    )
  }
}

export default IndependentArticleDetails;