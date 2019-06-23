import React from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import "../CSS/AddMarks.css";
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';


const schema = yup.object().shape({
    cid:yup.string().required('Required'),
    assNo: yup.string().required('Required'),
    sid: yup.string().required('Required'),
    marks: yup.string().required('Required'),





});


const chsubmit = function (val) {


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

    let ur = "http://"+localStorage.getItem("backip")+"/assignmentmarks/" + val.assNo;


    try {

      /*  axios.get(ur).then(res => {
            console.log(res);
            let marksData = res.data.data[0];

            if (marksData != null) {*/
                axios.post('http://'+localStorage.getItem("backip")+'/assignmentmarks/add', val)
                    .then(res => alert('Added Successfully'));
                window.location.reload();
        /*     } else {

                 alert("The relavant Course ID already exists.");
                 window.location.reload();
             }




         }).catch((error) => {
             // console.log('v');
             console.log(error.response);
             alert("Details are incorrect");
             window.location.reload();
         });*/

    } catch (e) {
        console.log(e);
    }





};

export default function AddMarks() {
    let result = localStorage.getItem("user");
    result = JSON.parse(result);

    if (result.types.value == 3 || result.types.value == 2 ) {

        return (

            <div>
                <h3>Add Marks</h3>
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
                        cid: localStorage.getItem("course"),
                        assNo: localStorage.getItem("assignment"),
                        sid: '',
                        marks: ''

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
                                        isValid={touched.cid && !errors.cid}
                                        input disabled={true}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Assignment No</Form.Label>
                                    <InputGroup>

                                        <Form.Control
                                            type="text"
                                            name="assNo"
                                            value={values.assNo}
                                            onChange={handleChange}
                                            isValid={touched.cid && !errors.assNo}
                                            input disabled={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.sid}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup>

                                        <Form.Control
                                            type="text"
                                            name="sid"
                                            value={values.sid}
                                            onChange={handleChange}
                                            isValid={touched.cid && !errors.sid}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.sid}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Marks</Form.Label>
                                    <InputGroup>

                                        <Form.Control
                                            type="text"
                                            name="marks"
                                            value={values.marks}
                                            onChange={handleChange}
                                            isValid={touched.cid && !errors.marks}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.marks}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                            </Form.Row>
                            <div style={{width: '100%', textAlign: 'center'}}>
                                <Button type="submit" style={{width: '75%'}}>Add Marks</Button>
                            </div>
                        </Form>

                    )}

                </Formik>
            </div>
        );
    }
    else{
            window.location.href="viewisntructormarks";
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

