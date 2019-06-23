import React from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import "../CSS/AssignInstructors.css";
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';


const schema = yup.object().shape({
    cid:yup.string().required('Required'),
    iemail: yup.string().required('Required'),




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

    val.notified = 'no';

    let ur = "http://"+localStorage.getItem("backip")+"/course/" + val.cid;
    let ur2 = "http://"+localStorage.getItem("backip")+"/courseinstructor/checkdup/" + val.iemail+ "/" + val.cid;

    try {
        axios.get(ur2).then(res => {
            console.log(res);
            let cidata = res.data.length;

            if (cidata == 0) {
                axios.get(ur).then(res1 => {
                    console.log(res1);
                    let coursedata = res1.data.data[0];

                    if (coursedata == null) {
                        alert("Details are incorrect");
                        window.location.reload();
                    } else {

                        axios.post('http://'+localStorage.getItem("backip")+'/courseinstructor/add', val)
                            .then(res => alert('Assigned Successfully'));

                        window.location.reload();
                    }


                }).catch((error) => {
                    // console.log('v');
                    console.log(error.response);
                    alert("Details are incorrect");
                    window.location.reload();
                });
            }else{
                alert("Duplicate Entry");
                window.location.reload();
            }});

    } catch (e) {
        // console.log('c');
        console.log(e);
    }





};

export default function AssignInstructors() {


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
                    lecemail: 'kamal@gmail.com',

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
                                <Form.Control.Feedback type="invalid">
                                    {errors.cid}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                <Form.Label>Instructor Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="email"
                                        aria-describedby="inputGroupPrepend"
                                        name="iemail"
                                        value={values.iemail}
                                        onChange={handleChange}

                                        isInvalid={!!errors.iemail}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.iemail}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <div style={{width: '20%',paddingTop:'2%', textAlign: 'center'}}>
                                <Button type="submit" style={{width: '75%'}}>Assign Instructor</Button>
                            </div>
                        </Form.Row>

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

