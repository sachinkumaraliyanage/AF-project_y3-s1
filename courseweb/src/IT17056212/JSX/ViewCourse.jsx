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
                    iemail = result4.email;
                    cid = courseGet;
                    try {
                        console.log("ddssssssssd");
                        let lk = 'http://'+localStorage.getItem("backip")+'/assignment/search/' + iemail + "/" + cid;


                        console.log(cid);
                        console.log(lk);

                        axios.get(lk).then(response => {


                                console.log("pula12");
                                let len = response.data.length;
                                this.setState(
                                    {
                                        data: response.data.data,
                                    })


                                //var elements=[];
                                if (len == null) {
                                  //  alert('No courses found for the User');
                                } else {
                                    /* alert(len);
                                     for (var i = 0; i < len; i++) {
                                         alert('success');
                                     }*/
                                }


                            }
                        )

                    } catch (e) {
                        console.log("ddsssssssqqqqqqqqsd");

                        console.log(e);
                    }
                    try {
                        axios.get('http://'+localStorage.getItem("backip")+'/assignment/search/' + iemail + "/" + this.state.cid).then(response => {


                                console.log(response);
                                let len2 = response.data.length;
                                this.setState(
                                    {
                                        data1: response.data,
                                    })


                            }
                        )

                    } catch (e) {

                        console.log(e);
                    }
                } else if (a == 1) {
                    iemail = result4.email;
                    cid = courseGet;
                    try {
                        console.log("ddssssssssd");
                        let lk = 'http://'+localStorage.getItem("backip")+'/assignment/searchStudent/' + cid;


                        console.log(cid);
                        console.log(lk);

                        axios.get(lk).then(response => {


                                console.log("pula12");
                                let len = response.data.length;
                                this.setState(
                                    {
                                        data: response.data.data,
                                    })


                                //var elements=[];
                                if (len == null) {
                                   // alert('No courses found for the User');
                                } else {
                                    /* alert(len);
                                     for (var i = 0; i < len; i++) {
                                         alert('success');
                                     }*/
                                }


                            }
                        )

                    } catch (e) {
                        console.log("ddsssssssqqqqqqqqsd");

                        console.log(e);
                    }
                    try {
                        axios.get('http://'+localStorage.getItem("backip")+'/assignment/search/' + iemail + "/" + this.state.cid).then(response => {


                                console.log(response);
                                let len2 = response.data.length;
                                this.setState(
                                    {
                                        data1: response.data,
                                    })


                            }
                        )

                    } catch (e) {

                        console.log(e);
                    }
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

        let courseid = e;
        var up={
            editdate:new Date().toLocaleString(),
            accepted:'yes',
        }
        try {
            axios.post('http://'+localStorage.getItem("backip")+'/course/update/' +courseid,up).then(


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
            notified:'yes',
        }

        let result5 = localStorage.getItem("user");
        result5 = JSON.parse(result5);

        try {
            axios.post('http://'+localStorage.getItem("backip")+'/courseinstructor/update/' +courseid+ "/" + result5.email,up2).then(


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
        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        return (
           <div>
                <div style={{ marginBottom: '25%'}}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>My Assignments</th>

                        </tr>
                        </thead>
                        <tbody>


                        {
                            this.state.data.map(function (assignment) {
                                return <tr>
                                    <td key={assignment.id}>{assignment.aid}</td>
                                    <td key={assignment.id}><Button type="button" style={{width: '75%'}}
                                                                onClick={(e) => this.handleClick(assignment.aid)}>View
                                        Assignments</Button></td>
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


/*class Type extends React.Component {


    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        this.props.onChange('types', value);
        // console.log(this.props.onChange);

    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur('types', true);
        // console.log(this.props.onBlur);

    };


    render() {
        return (
            <div>

                <Select
                    id="color"
                    multi={true}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>{this.props.error}</div>
                )}
            </div>
        );
    }
}*/

