import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import {BrowserRouter as Router} from "react-router-dom"

=======
import {BrowserRouter as Router} from 'react-router-dom'


>>>>>>> 7630d5c6a7a792968ba6d89ba946c928edc16e52
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
