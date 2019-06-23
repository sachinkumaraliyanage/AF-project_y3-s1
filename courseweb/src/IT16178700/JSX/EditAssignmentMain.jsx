import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
// import Register from "./Register";

import Footer from "../../IT17152938/JSX/Footer";
import EditAssignment from "./EditAssignment";

export default class EditAssignmentMain extends Component {
    state={
        userid:null
    }

    constructor(props){
        super(props);


    }
    componentDidMount(){
        // console.log("ssss2"+this.props.match.params.id);


    }
    render() {
        return (
            <div>
                {}
                <Navbarjsx/>
                <ImageSlide/>
                <EditAssignment userid={this.props.match.params.aid}/>
                <Footer/>
            </div>
        );
    }


}