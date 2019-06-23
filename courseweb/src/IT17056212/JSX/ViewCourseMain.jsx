import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
import Footer from "../../IT17152938/JSX/Footer";
import ViewCourse from "./ViewCourse";
import {Nav, NavDropdown} from "react-bootstrap";

export default class MyCoursesMain extends Component {
    render() {
        let result = localStorage.getItem("user");
        result = JSON.parse(result);
        if (result.types.value == 2) {
            return (
                <div>
                    <Navbarjsx/>
                    <ImageSlide/>
                    <Nav className="mr-auto">
                        <NavDropdown title="Assignment" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/assignmentmain">Add Assignment</NavDropdown.Item>
                            <NavDropdown.Item href="/assignmentall">Manage Assignment</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <ViewCourse/>
                    <Footer/>
                </div>
            );
        }else{
            return(
                <div>
                    <Navbarjsx/>
                    <ImageSlide/>
                    <ViewCourse/>
                    <Footer/>
                </div>
            )
        }
    }


}