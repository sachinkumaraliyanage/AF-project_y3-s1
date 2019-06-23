import React, {Component} from 'react';

import ImageSlide from "./ImageSlide";
// import Register from "./Register";
import Navbarjsx from "./Navbarjsx";
import Footer from "./Footer";
import Edituser from "./Edituser";

export default class EdituserMain extends Component {


    render() {
        return (
            <div>
                <Navbarjsx/>
                <ImageSlide/>
                <Edituser/>
                <Footer/>
            </div>
        );
    }


}