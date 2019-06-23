import React from 'react';
import {Button, Col, Form, InputGroup, Nav} from "react-bootstrap";
import "../CSS/Assignment.css";
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';

export default class MyAssignment extends React.Component {
    constructor() {
        super();

        this.state = {
            aid: '',
            data: [],
            data1: [],
            show: true,
        }
        this.handleClick = this.handleClick.bind(this);

        let result3 = localStorage.getItem("anyuserid");
        let result4 = localStorage.getItem("user");
        result4 = JSON.parse(result4);



    }

    handleClick(e) {
        let aid = e;
        this.setState({ai: aid});
        localStorage.setItem("assignment", aid);
        console.log(localStorage.getItem("course"));

        let emailuid = this.email;
        this.setState({uid: emailuid});
        localStorage.setItem("email", emailuid);
        console.log(localStorage.getItem("email"));
        window.location.href='../viewcoursemain';


    }
    handleClick2(e) {

        let aid = e;
        var up={
            editdate:new Date().toLocaleString(),
        };
        try {
            axios.post('http://'+localStorage.getItem("backip")+'/assignment/update/' +aid,up).then(


                res =>
                {
                    if (res.status != 200) {
                        alert("Cant update try again");
                        window.location.reload();
                    } else {
                    }

                }

            )

        } catch (e) {

            console.log(e);
        }

        var up2={
            editdate:new Date().toLocaleString(),
        }

        let result5 = localStorage.getItem("user");
        result5 = JSON.parse(result5);

        try {
            axios.post('http://'+localStorage.getItem("backip")+'/assignment/update/' +aid+ "/" + result5.email,up2).then(


                res =>
                {
                    if (res.status != 200) {
                        alert("Cant update try again");
                        window.location.reload();
                    } else {
                        window.location.reload();
                    }

                }

            )

        } catch (e) {

            console.log(e);
        }


    }



    render() {
        return (
                <div style={{ marginBottom: '25%'}}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>My Assignment</th>

                        </tr>
                        </thead>
                        <tbody>


                        {
                            this.state.data.map(function (assignment) {
                                return <tr>
                                    <td key={assignment.aid}>{assignment.aid}</td>
                                    <td key={assignment.aid}><Button type="button" style={{width: '75%'}}
                                                                onClick={(e) => this.handleClick(assignment.aid)}>View
                                        Assignment</Button></td>
                                </tr>;
                            }.bind(this))
                        }



                        </tbody>
                    </table>

                </div>
        );
    }
}

