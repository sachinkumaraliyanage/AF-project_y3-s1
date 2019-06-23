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
                    let notify='yes';
                    try {
                        axios.get('http://'+localStorage.getItem("backip")+'/courseinstructor/' + iemail+ "/" + notify).then(response => {


                            console.log(response);
                            let len = response.data.length;
                            this.setState(
                                {
                                    data: response.data,
                                })


                            //var elements=[];
                            if (len == null) {
                                alert('No courses found for the User');
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
                    try {
                        axios.get('http://'+localStorage.getItem("backip")+'/courseinstructor/' + iemail+ "/" + 'no').then(response => {


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
                }else if(a==1){
                    semail = result4.email;
                    let enrolled='yes';
                    try {
                        axios.get('http://'+localStorage.getItem("backip")+'/studentenroll/' + semail+ "/" + enrolled).then(response => {


                                console.log(response);
                                let len = response.data.length;
                                this.setState(
                                    {
                                        data: response.data,
                                    })


                                //var elements=[];
                                if (len == null) {
                                    alert('No courses found for the User');
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
                }
            }
        } else {


        }




    }

    handleClick(e) {
        let courseid = e;
        this.setState({ci: courseid});
        localStorage.setItem("course", courseid);
        console.log(localStorage.getItem("course"));
        window.location.href='../viewcoursemain';


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
                <div style={{marginTop: '6%', marginBottom: '5%'}}>
                    <table className="table table-striped">
                        <thead>
                        <tr>


                        </tr>
                        </thead>
                        <tbody>

                       {/* <tr><td>Notifications</td></tr>*/}

                        {
                            this.state.data1.map(function (notification) {
                                return<>

                            <Alert show={this.state.show} variant="success">
                                <Alert.Heading>{notification.cid}</Alert.Heading>
                                <p>
                                   You have a new course with Course ID {notification.cid}. Would you like to Accept it ?
                                </p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button onClick={(e) => this.handleClick2(notification.cid)} variant="outline-success">
                                        Accept Course
                                    </Button>
                                </div>
                            </Alert>

                           {/* {!this.state.show && <Button onClick={(e) => this.handleClick2(notification.cid)}>Accept Course</Button>}*/}
                        </>

                            }.bind(this))
                        }

                       {/*  {
                            this.state.data1.map(function (notification) {
                                return <tr>
                                    <td key={notification.id}>{notification.cid}</td>
                                    <td key={notification.id}><Button type="button" style={{width: '75%'}}
                                                                      onClick={(e) => this.handleClick2(notification.cid)}>Accept
                                        Course</Button></td>
                                </tr>;
                            }.bind(this))
                        }
                        <tr><td>My Courses</td></tr>*/}
                      {/*  {
                            this.state.data.map(function (course) {
                                return <tr>
                                    <td key={course.id}>{course.cid}</td>
                                    <td key={course.id}><Button type="button" style={{width: '75%'}}
                                                                onClick={(e) => this.handleClick(course.cid)}>View
                                        Course</Button></td>
                                </tr>;
                            }.bind(this))
                        }

*/}

                        </tbody>
                    </table>

                </div>
                <div style={{ marginBottom: '25%'}}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
<th>My Courses</th>

                        </tr>
                        </thead>
                        <tbody>


                        {
                            this.state.data.map(function (course) {
                                return <tr>
                                    <td key={course.id}>{course.cid}</td>
                                    <td key={course.id}><Button type="button" style={{width: '75%'}}
                                                                onClick={(e) => this.handleClick(course.cid)}>View
                                        Course</Button></td>
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

