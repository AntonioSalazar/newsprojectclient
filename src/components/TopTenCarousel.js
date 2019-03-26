import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel"
import CarouselCaption from "react-bootstrap/CarouselCaption"
import CarouselItem from "react-bootstrap/CarouselItem"

class TopTenCarousel extends Component {

  state = {
    newsFromAPI : []
  }

  componentWillMount(){
    this.getNewsFromAPI()
  }
  
  getNewsFromAPI = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=8631d37e5233459cb78edcb073b174ff")
    .then(responseFromAPI => {
      responseFromAPI.json()
      .then(jsonNews => {
        const threeArticles = jsonNews.articles.slice(0, 3)
        this.setState({
          newsFromAPI: threeArticles
        })
      })
    })
  }




  render(){
    return(
      <Carousel >
        {
          this.state.newsFromAPI.map((oneArticle, index) => 
              (
                <CarouselItem key={index} className="custom-carousel-item">
                <div className="div-img-carousel">
                  <img
                    className="d-block w-100"
                    src={oneArticle.urlToImage}
                    alt={oneArticle.urlToImage}
                    id="carousel-img"
                  />                  
                </div>
                  <CarouselCaption>
                    <div className="text-carousel">
                      <a href={`${oneArticle.url}`}><p className="preview-text">{oneArticle.description}</p></a> 
                      <p>{oneArticle.title}</p>                      
                    </div>
                  </CarouselCaption>
                </CarouselItem>              
              )
            )
        }
      </Carousel>
    )
  }
}

export default TopTenCarousel;