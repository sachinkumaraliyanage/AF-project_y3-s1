import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,ButtonToolbar } from 'react-bootstrap';
import Navbarjsx from "./IT17152938/JSX/Navbarjsx";
import ImageSlide from "./IT17152938/JSX/ImageSlide";
import Detailsindexjs from "./IT17152938/JSX/Detailsindexjs";
import Footer from "./IT17152938/JSX/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" >

        <Navbarjsx/>
        <ImageSlide/>
        <Detailsindexjs/>
        <Footer/>

       {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ButtonToolbar>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </ButtonToolbar>;*/}
      </div>
    );
  }
}

export default App;
