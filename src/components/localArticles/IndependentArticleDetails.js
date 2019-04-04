import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import { Card, CardImg, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
// import NewsOptions from '../NewsOptions'


class IndependentArticleDetails extends Component {

  state = {
    independentAricles: []
  }

  componentDidMount(){
    this.getArticleById()
  }

  getArticleById = () => {
    const {params} = this.props.match
    fetch(`http://localhost:5000/independent_articles/${params.id}`)
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
    console.log(this.state.independentAricles);
    return (
      <div>
        {/* <NewsOptions /> */}
        {/* <Card className='newsCard' style={{textAlign: 'left'}}>
          {
            this.state.independentAricles.map((oneArticle) => {
              return(
                <div key={oneArticle._id}>
                  <CardImg top width='100%' src={oneArticle.imgPath} alt='Card image cap'/>
                  <CardBody style={{marginBottom: '20px'}}>
                    <CardTitle><p className="title-news-card">{oneArticle.newsTitle}</p></CardTitle>
                    <CardSubtitle><p>{oneArticle.newsDescription}</p></CardSubtitle>
                    <Button style={{textDecoration: 'none'}} color="danger">
                      <Link to="/">Regreso</Link>
                    </Button>
                  </CardBody>
                </div>
              )
            })
          }
        </Card> */}
        <h1>hey, this is the individual article details page</h1>
      </div>
    )
  }
}

export default IndependentArticleDetails;