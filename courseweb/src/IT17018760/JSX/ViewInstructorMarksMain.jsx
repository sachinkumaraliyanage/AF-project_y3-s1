import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
import Footer from "../../IT17152938/JSX/Footer";
import ViewInstructorMarks from "./ViewInstructorMarks";
import UploadAssignment from "../../IT16178700/JSX/UploadAssignment";

export default class ViewInstructorMarksMain extends Component {



    render() {
        return (
            <div>

                <Navbarjsx/>
                {/*<ImageSlide/>*/}
                <UploadAssignment/>
                <ViewInstructorMarks/>
                <Footer/>
            </div>
        );
    }


}