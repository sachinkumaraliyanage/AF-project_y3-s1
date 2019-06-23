import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
// import ReactBootstrap from "react-bootstrap";

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//npm install --save react-router-dom
// npm install --save react-bootstrap bootstrap
//npm install mdbreact
//npm install --save react-browser-router
//npm install --save axios
//npm install --save formik
//npm install --save yup
//npm install --save react-select
//npm install --save react-datepicker
//npm install --save react-bootstrap-date-picker
//npm install material-table --save
//npm i @material-ui/core
//npm i @date-io/core
//npm install @material-ui/icons
//npm install --save bootstrap
//npm install react-confirm-alert --save

serviceWorker.unregister();
