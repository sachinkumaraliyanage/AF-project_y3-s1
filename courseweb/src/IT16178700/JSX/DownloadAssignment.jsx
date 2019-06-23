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

export default class MyCourses extends React.Component {
    constructor() {
        super();

        this.state = {
            cid: '',
            data: [],
            data1: [],
            show: true,
        }
        this.handleClick = this.handleClick.bind(this);

        let result3 = localStorage.getItem("anyuserid");
        let result4 = localStorage.getItem("user");
        let courseGet=localStorage.getItem("course");
        result4 = JSON.parse(result4);

        let semail = "";
        let iemail = "";
        let a = "";
        let cid="";

        if (result3 == null || result3 == undefined) {
            if ((result4 == null || result4 == undefined)) {
                let iemail = "";
                let semail = "";

            } else {
                a = result4.types.value;
                if (a == 2) {

                    cid = courseGet;

                    try {
                        axios.get('http://'+localStorage.getItem("backip")+'/assignmentupload/search/' + cid+ "/" +localStorage.getItem("assignment") ).then(response => {


                                console.log(response);
                                let len = response.data.length;
                                this.setState(
                                    {
                                        data: response.data.data,
                                    })


                                //var elements=[];
                                if (len == null) {
                                    // alert('No assignments has been uploaded ');
                                } else {
                                    /* alert(len);
                                     for (var i = 0; i < len; i++) {
                                         alert('success');
                                     }*/
                                }


                            }

                        )

                    } catch (e) {

                        console.log(e);
                    }

                } else if (a == 1) {

                }


            }
        }

    }

    handleClick(e) {
        let assid = e;
        this.setState({ci: assid});
        localStorage.setItem("assignment", assid);
        console.log(localStorage.getItem("course"));
        window.location.href='../addmarks';


    }
    handleClick2(e) {




    }



    render() {

        return (
            <div>
                <div style={{ marginTop: '10%'}}>
                    <h3>Assignment Uploads</h3>
                    <table className="table table-striped" style={{ marginBottom: '10%'}}>
                        <thead>
                        <tr>
                            <th>Student Email</th>
                            <th>Upload date</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>


                        {
                            this.state.data.map(function (assignment) {
                                return <tr>
                                    <td key={assignment.id}>{assignment.emailid}</td>
                                    <td key={assignment.id}>{assignment.adddate}</td>
                                    <td key={assignment.id}><Button type="button" style={{width: '75%'}}
                                                                    onClick={(e) => this.handleClick(assignment.uploadid)}>Download File</Button></td>
                                </tr>;
                            }.bind(this))
                        }



                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}




