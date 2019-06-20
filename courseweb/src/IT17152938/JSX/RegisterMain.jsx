import React, {Component} from 'react';

import ImageSlide from "./ImageSlide";
// import Register from "./Register";
import Navbarjsx from "./Navbarjsx";
import Footer from "./Footer";
import Register from "./Register";

export default class RegisterMain extends Component {
    render() {
        return (
            <div>
                <Navbarjsx/>
                <ImageSlide/>
                <Register/>
                <Footer/>
            </div>
        );
    }


}