import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
import Footer from "../../IT17152938/JSX/Footer";
import AddMarks from "./AddMarks";
import ViewAllMarks from "./ViewInstructorMarks";
import DownloadAssignment from "../../IT16178700/JSX/DownloadAssignment";

export default class AddMarksMain extends Component {

    render() {
        return (
            <div>
                <Navbarjsx/>
          <DownloadAssignment/>
                <AddMarks/>
                <ViewAllMarks/>
                <Footer/>
            </div>
        );
    }


}