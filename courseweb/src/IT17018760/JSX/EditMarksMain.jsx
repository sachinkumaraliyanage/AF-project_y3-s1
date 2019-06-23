import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
// import Register from "./Register";

import Footer from "../../IT17152938/JSX/Footer";
import EditMarks from "./EditMarks";

export default class EditMarksMain extends Component {
    state={
        userid:null
    }

    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                {}
                <Navbarjsx/>
                <ImageSlide/>
             <EditMarks userid={this.props.match.params.id}/>
                <Footer/>
            </div>
        );
    }


}