import React, {Component} from 'react';

import ImageSlide from "./ImageSlide";
// import Register from "./Register";
import Navbarjsx from "./Navbarjsx";
import Footer from "./Footer";
import Edituseradmin from "./Edituseradmin";

export default class EdituseradminMain extends Component {
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
                <Edituseradmin userid={this.props.match.params.id}/>
                <Footer/>
            </div>
        );
    }


}