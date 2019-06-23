import React from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import "../CSS/Register.css";
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';


const schema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    address: yup.string().required('Required'),
    bday: yup.date().required('Required').max(new Date(), "Date cannot be in the future"),
    types: yup.array()
        .min(2, 'chooce type')
        .of(
            yup.object().shape({

                value: yup.string().required(),
            })
        ).nullable(),
    password: yup.string()
        .min(6, 'Password has to be longer than 6 characters!')
        .required('Password is required!'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref("password")], 'Passwords are not the same!')
        .required('Password confirmation is required!'),
    pno: yup.string().required('Required')


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

    val.status = true;
    // console.log(val);
    axios.post('http://'+localStorage.getItem("backip")+'/user/add', val)
        .then(res => alert("user add "));
    let a = "<html><body><h1>you are add as a Instructor</h1><p>please visit this site and login in</p><a href='"+localStorage.getItem("frontip")+"'>http://"+localStorage.getItem("frontip")+"</a></body></html>";
    let b = "<html><body><h1>you are add as a Administrator</h1><p>please visit this site and login in</p><a href='"+localStorage.getItem("frontip")+"'>http://"+localStorage.getItem("frontip")+"</a></body></html>";
    if (val.types.value == '2') {
        let ma = {
            to: val.email,
            sub: 'sliit courseweb',
            body: a
        };

        axios.post('http://'+localStorage.getItem("emailip")+'/email/send', ma)
            .then(res => console.log(res.data));
    } else if (val.types.value == '3') {
        let ma = {
            to: val.email,
            sub: 'sliit courseweb',
            body: b
        };

        axios.post('http://'+localStorage.getItem("emailip")+'/email/send', ma)
            .then(res => console.log(res.data));
    }
};

export default function Register() {


    return (
        <div>

            <Formik
                validationSchema={schema}
                onSubmit={(values, {setSubmitting, resetForm}) => {


                    setTimeout(() => {
                        // console.log(JSON.stringify(values, null, 2));
                        // console.log(values);
                        chsubmit(values);
                        resetForm({});
                        setSubmitting(true);
                    }, 500);
                }}
                initialValues={{
                    firstName: 'Mark',
                    lastName: 'Otto',
                    types: {value: '1', label: 'Students'},
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
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.lastName}
                                />

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="email"
                                        aria-describedby="inputGroupPrepend"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}

                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationFormik03">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    isInvalid={!!errors.address}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.address}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04">
                                <Form.Label>User Type</Form.Label>
                                {/* <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                            />*/}
                                <Type
                                    value={values.types}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.types}
                                    touched={touched.types}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.types}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik05">
                                <Form.Label>Birthday</Form.Label>
                                <Form.Control
                                    type="date"

                                    name="bday"
                                    value={values.bday}
                                    onChange={handleChange}
                                    isInvalid={!!errors.bday}
                                />


                                <Form.Control.Feedback type="invalid">
                                    {errors.bday}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationFormik06">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="077XXXXXXX"
                                    name="pno"
                                    value={values.pno}
                                    onChange={handleChange}
                                    isInvalid={!!errors.pno}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.pno}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik07">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik08">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="passwordConfirmation"
                                    name="passwordConfirmation"
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    isInvalid={!!errors.passwordConfirmation}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.passwordConfirmation}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <Button type="submit" style={{width: '75%'}}>Submit form</Button>
                        </div>
                    </Form>

                )}

            </Formik>
        </div>
    );
}

let result = localStorage.getItem("user");
result = JSON.parse(result);
console.log(result);
let k = 1;
let y = 1;

console.log(result);
if (result == null || result == undefined) {
    k = 1;
    y = 1;
} else if (result.types.value == 3) {
    k = 3;
    y = 3;
} else {
    k = 1;
    y = 1;
}

let se = function () {

    if (k == 2) {
        return {value: '2', label: 'Instructor'};
    } else if (k == 3) {
        return {value: '3', label: 'Admin'};
    } else {
        return {value: '1', label: 'Students'};
    }
};

se = se();
let options = function () {

    if (y == 2) {
        return [
            {value: '1', label: 'Students'},
            {value: '2', label: 'Instructor'},


        ];
    } else if (y == 3) {
        return [
            {value: '1', label: 'Students'},
            {value: '2', label: 'Instructor'},
            {value: '3', label: 'Admin'},

        ];
    } else {
        return [
            {value: '1', label: 'Students'},


        ];
    }
};
options = options();

class Type extends React.Component {


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
                    options={options}
                    multi={true}
                    defaultValue={se}
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
}

