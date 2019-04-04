import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom"
// import NewsOptions from './NewsOptions'

class DashboardArticle extends Component {

    state = {
        individualArticle : []
    }

    componentDidMount(){
        this.getSingleArticle()
    }

    getSingleArticle = () => {
        const {params} = this.props.match
        fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=8631d37e5233459cb78edcb073b174ff')
        .then(infoFromApi => {
            infoFromApi.json()
            .then( data => {
                const ArticlesFromDashboard = data.articles
                const singleArticle = ArticlesFromDashboard.filter(title => {
                    return title.title === params.title
                })
                this.setState({
                    individualArticle : singleArticle
                })
            })
            .catch(err => console.log(err))
        })
    }

    
    render(){
        return(
            <div style={{marginTop: "20px", paddingBottom: "20px"}}>
            {/* <NewsOptions /> */}
            <Card className="newsCard" style={{textAlign: 'left'}}>
              {
                this.state.individualArticle.map((oneArticle, index) => {
                   return(
                    <div key={index} className="article-card">
                      <CardImg top width="100%" src={oneArticle.urlToImage} alt="Card image cap" />
                      <CardBody style={{marginBottom: "20px"}}>
                      <CardTitle><p className="title-news-card">{oneArticle.title}</p></CardTitle>
                      <CardSubtitle><p>{oneArticle.description}</p></CardSubtitle>
                      <Link to={`/`} style={{textDecoration: "none"}}>
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

export default DashboardArticle