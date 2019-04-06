import React, {Component} from 'react'
import axios from 'axios'

class AddArticle extends Component {

    state = {
        newsTitle: '',
        newsDescription: '',
        newsContent: '',
        location: '',
        author: '',
        selectedFile: null
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const newsTitle = this.state.newsTitle;
        const newsDescription = this.state.newsDescription;
        const newsContent = this.state.newsContent;
        const location = this.state.location;
        const author = this.state.author;
        
        const data = {
            newsTitle: newsTitle,
            newsDescription: newsDescription,
            newsContent: newsContent,
            location: location,
            author: author
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        }

        fetch("http://localhost:5000/add_article", options)
        .then(() => {
            this.setState({
                newsTitle: '',
                newsDescription: '',
                newsContent: '',
                location: '',
                author: ''
            })
        })
        .catch(err => console.log(err))
    }
  

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('photo', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('http://localhost:5000/add_article', fd, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res)
        })
    }

    render(){
        console.log(this.state.selectedFile);
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
                    <label htmlFor="imgPath">Imagen</label>
                    <input type="file"  onChange={this.fileSelectHandler} required/>

                    <input type="submit" value="Enviar" className="submit-btn" onClick={this.fileUploadHandler} />

                </form>
            </div>
        )
    }
}

export default AddArticle;