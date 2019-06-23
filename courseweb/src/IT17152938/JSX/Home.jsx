import React, {Component} from 'react';

import ImageSlide from "./ImageSlide";
import Detailsindexjs from "./Detailsindexjs";
// import Register from "./Register";
import Navbarjsx from "./Navbarjsx";
import Footer from "./Footer";
import Notification from "../../IT17056212/JSX/Notification";

// localStorage.setItem("user", null);
export default class Home extends Component {

    render() {
        return (
            <div>
                <Navbarjsx/>
                <Notification/>
                <ImageSlide/>
                <Detailsindexjs/>
                <Footer/>
            </div>
        );
    }


}
