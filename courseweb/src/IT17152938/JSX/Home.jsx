import React, {Component} from 'react';

import ImageSlide from "./ImageSlide";
import Detailsindexjs from "./Detailsindexjs";
// import Register from "./Register";
import Navbarjsx from "./Navbarjsx";
import Footer from "./Footer";


// localStorage.setItem("user", null);
export default class Home extends Component {

    render() {
        return (
            <div>
                <Navbarjsx/>
                <ImageSlide/>
                <Detailsindexjs/>
                <Footer/>
            </div>
        );
    }


}
