import React, {Component} from "react";


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
      responseFromAPI.json()
      .then(jsonWithArticles => {
        const theArticles = jsonWithArticles.articles
        const singleArticle = theArticles.filter(title => {
          return title.title === params.title
        })
        this.setState({
          theArticle: singleArticle
        })
        console.log(this.state.theArticle)
      })
      .catch(err => console.log(err))
    })
  }

  render(){
    return(
      <div>
       {
         this.state.theArticle.map((article, index )=> {
           return(
             <div key={index}>
              <h1>{article.author}</h1>
             </div>
           )
         })
       }
      </div>
    )
  }
}

export default ArticleDetails;