import React, {Component} from 'react';

import ImageSlide from "./ImageSlide";
// import Register from "./Register";
import Navbarjsx from "./Navbarjsx";
import Footer from "./Footer";
import UserManage from "./UserManage";

export default class UsermanageMain extends Component {



    render() {
        return (
            <div>

                <Navbarjsx/>
                <ImageSlide/>
                <UserManage/>
                <Footer/>
            </div>
        );
    }


}