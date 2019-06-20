import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
import Footer from "../../IT17152938/JSX/Footer";
import Enroll from "./Enroll";

export default class EnrollMain extends Component {
    render() {
        return (
            <div>
                <Navbarjsx/>
                <ImageSlide/>
                <Enroll/>
                <Footer/>
            </div>
        );
    }


}