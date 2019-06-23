import React from 'react';
import {Button, Col, Form, InputGroup, Nav} from "react-bootstrap";
import "../CSS/MyCourses.css";
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';

export default class Notification extends React.Component {
    constructor() {
        super();

        this.state = {
            cid: '',
            len:'',
            data1: [],
            show: true,
        }


        let result3 = localStorage.getItem("anyuserid");
        let result4 = localStorage.getItem("user");
        result4 = JSON.parse(result4);

        let semail = "";
        let iemail = "";
        let a = "";


        if (result3 == null || result3 == undefined) {
            if ((result4 == null || result4 == undefined)) {
                let iemail = "";
                let semail = "";
            } else {
                a = result4.types.value;
                if (a == 2) {
                    iemail = result4.email;

                    try {
                        axios.get('http://'+localStorage.getItem("backip")+'/courseinstructor/' + iemail+ "/" + 'no').then(response => {


                                console.log(response);
                                let len2 =
                                this.setState(
                                    {
                                        data1: response.data,
                                        len:response.data.length
                                    })


                            }

                        )

                    } catch (e) {

                        console.log(e);
                    }
                }
            }
        } else {


        }




    }



    render() {
        let result = localStorage.getItem("user");
        result = JSON.parse(result);
        if (result == null || result == undefined) {
            return (
                <div></div>
            );
        }else if(result.types.value == 2 && this.state.len != '0' ){
            return (
                <div>
                <div style={{marginTop: '6%', marginBottom: '0%'}}>
        <div className="alert alert-primary" role="alert">
                You have { this.state.len} new course assigned. Please visit <a href="/mycoursesmain" className="alert-link">My Courses</a> page to accept new courses.
        </div>


        </div>
        </div>);
        }else{
            return (
                <div></div>
            );
        }
    }
}



