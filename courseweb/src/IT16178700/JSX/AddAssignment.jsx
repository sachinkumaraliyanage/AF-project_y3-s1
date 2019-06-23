import React from 'react';
import { Button, Col, Form } from "react-bootstrap";
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../CSS/Assignment.css";
import {Link} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";


const schema = yup.object().shape({
    iid: yup.string().required('Required'),
    cid: yup.string().required('Required'),
    aid: yup.string().required('Required'),
    description: yup.string().required('Required'),
    duedate:  yup.date().required().min(new Date(), "Date cannot be in the past")
});


const chsubmit = function (val) {
    // console.log("sachin");
    // console.log(val);

    let result = localStorage.getItem("user");
    result = JSON.parse(result);
   // var emailid = "";
    //this.emailid = result.email;
    // this.cid = result.cid;
    // this.cname = result.cname;
    // console.log(this.emailid+""+this.cid+""+this.cname);
    if (!(result == null || result == undefined)) {
        val.iid = result.email;
    } else {
        val.iid = "self";
    }


    val.adddate = new Date().toLocaleString();

    // console.log(val);
    let ur = "http://"+localStorage.getItem("backip")+"/assignment/checkassignment/" + val.aid+ "/" + val.cid;




       axios.get(ur).then(res => {
            console.log(res);
            let assignmentdata = res.data.data[0];

           if (assignmentdata == null) {
                axios.post('http://'+localStorage.getItem("backip")+'/assignment/add', val)
                    .then(res => alert('Added Successfully'));
                console.log(val);
           alert("Assignment Added.");
                window.location.href="/viewcoursemain";
   } else {

               alert("The relavant Assignment ID already exists.");
               window.location.reload();

           }
        }).catch((error) => {
            // console.log('v');
            console.log(error.response);
            alert("Details are incorrect");
             window.location.reload();
        });




};

export default function AddAssignment() {
    let result = localStorage.getItem("user");
    result = JSON.parse(result);

    let result1 = localStorage.getItem("course");
    return (
        <div>

            <Formik
                validationSchema={schema}
                onSubmit={(values, { setSubmitting, resetForm }) => {


                    setTimeout(() => {

                        chsubmit(values);
                        resetForm({});
                        setSubmitting(true);
                    }, 500);
                }}
                initialValues={{
                    iid: result.email,
                    cid: result1,
                    cname: 'Application Framework',
                    aid: 'Assignment 1',
                    description: 'Final Report Submition',
                    duedate: new Date(),
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
                            style={{ paddingBottom: '3%', paddingTop: '3%', paddingLeft: '3%', paddingRight: '3%' }}>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationFormik01">
                                    <Form.Label>Instructer ID</Form.Label>
                                    <Form.Control
                                        disabled
                                        type="text"
                                        name="iid"
                                        value={values.iid}
                                        onChange={handleChange}
                                        isValid={touched.uid && !errors.uid}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label>Course ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="cid"
                                        value={values.cid}
                                        onChange={handleChange}
                                        isValid={touched.uid && !errors.cid}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik03">

                                    <Form.Control
                                        type="hidden"
                                        name="cname"
                                        value={values.cname}
                                        onChange={handleChange}
                                        isValid={touched.cid && !errors.cname}
                                    />

                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik04">
                                    <Form.Label>Assignment ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="aid"
                                        value={values.aid}
                                        onChange={handleChange}
                                        isValid={touched.cname && !errors.aid}
                                    />

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik05">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="description"
                                        value={values.enrollkey}
                                        onChange={handleChange}
                                        isValid={touched.aid && !errors.description}
                                    />

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationFormik06">
                                    <Form.Label>DueDate</Form.Label><br/>
                                    <Form.Control
                                        type="date"
                                        name="duedate"
                                        value={values.duedate}
                                        onChange={handleChange}
                                        isInvalid={!!errors.duedate}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <Button type="reset" style={{ width: '40%', margin: '10px'}}>Reset form</Button>
                                <Button type="submit" style={{ width: '40%' }}>Submit form</Button>
                            </div>
                        </Form>

                    )}

            </Formik>
        </div>
    );
}


