import React from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import "../CSS/AddCourse.css";
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';


const schema = yup.object().shape({
    cid:yup.string().required('Required'),
    cname: yup.string().required('Required'),
    enrollkey: yup.string().required('Required'),



});


const chsubmit = function (val) {
    // console.log("sachin");
    // console.log(val);

    let result = localStorage.getItem("user");
    result = JSON.parse(result);

    if (!(result == null || result == undefined)) {
        val.addby = result._id;
        val.editby = result._id;
    } else {
        val.addby = "self";
        val.editby = "self";
    }


    val.adddate = new Date().toLocaleString();
    val.editdate = val.adddate;

    val.accepted = 'no';
    // console.log(val);
    let ur = "http://"+localStorage.getItem("backip")+"/course/" + val.cid;


    try {

        axios.get(ur).then(res => {
            console.log(res);
            let coursedata = res.data.data[0];

            if (coursedata == null) {
                axios.post('http://'+localStorage.getItem("backip")+'/course/add', val)
                    .then(res => alert('Added Successfully'));
                window.location.reload();
            } else {

                alert("The relavant Course ID already exists.");
                window.location.reload();
            }

        }).catch((error) => {
            // console.log('v');
            console.log(error.response);
            alert("Details are incorrect");
            window.location.reload();
        });

    } catch (e) {
            // console.log('c');
            console.log(e);
        }


    };

export default function AddCourse() {


    return (
        <div>

            <Formik
                validationSchema={schema}
                onSubmit={(values, {setSubmitting, resetForm}) => {


                    setTimeout(() => {

                        chsubmit(values);
                        resetForm({});
                        setSubmitting(true);
                    }, 500);
                }}
                initialValues={{
                    cid: 'SE3040',
                    cname: 'Application Frameworks',
                    enrollkey:'SE3040-101'
                }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      setFieldValue,
                      setFieldTouched,
                      touched,
                      isValid,
                      errors,
                      resetForm,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}
                          style={{paddingBottom: '3%', paddingTop: '3%', paddingLeft: '3%', paddingRight: '3%'}}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>Course ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cid"
                                    value={values.cid}
                                    onChange={handleChange}
                                    isInvalid={!!errors.cid}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.cid}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Course name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cname"
                                    value={values.cname}
                                    onChange={handleChange}
                                    isInvalid={!!errors.cname}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.cname}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Enrollment Key</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="enrollkey"
                                    value={values.enrollkey}
                                    onChange={handleChange}
                                    isInvalid={!!errors.enrollkey}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.enrollkey}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <Button type="submit" style={{width: '75%'}}>Add Course</Button>
                        </div>
                    </Form>

                )}

            </Formik>
        </div>
    );
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

