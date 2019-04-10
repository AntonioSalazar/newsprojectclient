import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class AddArticle extends Component {

    state = {
        newsTitle: '',
        newsDescription: '',
        newsContent: '',
        location: '',
        author: '',
        selectedFile: null,
        redirect: false
    }

    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('photo', this.state.selectedFile, this.state.selectedFile.name)
        // return (axios.post('http://localhost:5000/add_photo', fd, {
        return (axios.post(`${process.env.REACT_APP_API_URL}/add_photo`, fd, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }))
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const newsTitle = this.state.newsTitle;
        const newsDescription = this.state.newsDescription;
        const newsContent = this.state.newsContent;
        const location = this.state.location;
        const author = this.state.author;
        this.fileUploadHandler().then(res => {
            const data = {
                newsTitle: newsTitle,
                newsDescription: newsDescription,
                newsContent: newsContent,
                location: location,
                author: author,
                imgPath: res.data.imgPath,
                imgName: res.data.imgName
            }
            
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                credentials: "include"
            }
            // fetch("http://localhost:5000/add_article", options)
            fetch(`${process.env.REACT_APP_API_URL}/add_article`, options)
            .then(() => {
                this.setState({
                    newsTitle: '',
                    newsDescription: '',
                    newsContent: '',
                    location: '',
                    author: '',
                    redirect: true
                })
            })
            .catch(err => console.log(err))            
        })

    }
  
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        if (this.state.redirect) {
           return  <Redirect to="/localArticles"/>
        } else {
            return(
                <div>
                    <form onSubmit={this.handleFormSubmit} className="signup-form">

                        <label htmlFor="newsTitle">Titulo de la noticia:</label>
                        <input type="text" value={this.state.newsTitle} name="newsTitle" placeholder="Titulo de la noticia" onChange={e => this.handleChange(e)}/>
                            <hr/>
                        <label htmlFor="newsDescription">Descripcion de la noticia:</label>
                        <input type="text" value={this.state.newsDescription} name="newsDescription" placeholder="Cuentanos en 10 palabras sobre tu reporte" onChange={e => this.handleChange(e)}/>
                            <hr/>
                        <label htmlFor="newsContent">Reporte completo de la noticia:</label>
                        <input type="text" value={this.state.newsContent} name="newsContent" placeholder="Cuentanos todo sobre tu reporte" onChange={e => this.handleChange(e)} required/>
                            <hr/>
                        <label htmlFor="location">Ubicacion</label>
                        <input type="text" value={this.state.location} name="location" placeholder="Donde ocurrio" onChange={e => this.handleChange(e)}/>
                            <hr/>
                        <label htmlFor="photo">Imagen</label>
                        <input type="file" name="photo"  onChange={this.fileSelectHandler} required/>

                        <input type="submit" value="Enviar" className="submit-btn"  />

                    </form>
                </div>
            )            
        }

    }
}

export default AddArticle;