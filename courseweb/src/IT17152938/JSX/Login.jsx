import React, {Component} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';

import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


const schema = yup.object().shape({
    email: yup.string(),
    password: yup.string()

});

const chsubmit = function (val) {
    // console.log("sachin");
    // console.log(val);

    let ur = "http://"+localStorage.getItem("backip")+"/user/" + val.email + "/" + val.password;


    try {

        axios.get(ur).then(res => {
            // console.log("sachin2   "+ur);
//.data=null || res.data==undefined||res.data.length==0
//             console.log(res.data.data[0]);
            if (res.status != 200) {
                alert("email and password incorrect");
                window.location.reload();
            } else {
                let user = res.data.data[0];
                if(user!=undefined) {
                    // console.log(user);
                    localStorage.setItem("user", JSON.stringify(user));

                }
                else{
                    alert("email and password incorrect");
                    window.location.reload();
                }
                window.location.reload();
            }

            // let w = localStorage.getItem("user");
            // console.log("sachin2   "+ur);
            // console.log( JSON.parse(w));


        }).catch((error) => {
            // console.log('v');
            console.log(error.response);
            alert("email and password incorrect");
            window.location.reload();
        });

    } catch (e) {
        // console.log('c');
        console.log(e);
    }
};


export default class Login extends Component {
    render() {

        localStorage.setItem("frontip", "192.168.43.192:3000");
        localStorage.setItem("backip", "192.168.43.192:5000");
        localStorage.setItem("emailip", "192.168.43.192:8188");
        localStorage.setItem("fileip", "192.168.43.192:4999");
        return (
            <Formik
                validationSchema={schema}
                onSubmit={(values, {setSubmitting, resetForm}) => {


                    setTimeout(() => {
                        // console.log(JSON.stringify(values, null, 2));
                        // console.log(values);
                        chsubmit(values);
                        resetForm({});
                        setSubmitting(true);
                        // console.log("sachin3");
                        // var result = localStorage.getItem("user");
                        // console.log(result);
                    }, 500);
                }}
                initialValues={{}}
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
                    <Form noValidate onSubmit={handleSubmit} inline>

                        <FormControl type="email" placeholder="Email" className="mr-sm-2" name="email"
                                     value={values.email} onChange={handleChange} isInvalid={!!errors.email}/>
                        <FormControl type="password" placeholder="Password" className="mr-sm-2" name="password"
                                     value={values.password} onChange={handleChange} isValid={!!errors.password}/>
                        <Button type="submit" variant="outline-primary">LOGIN</Button>


                    </Form>

                )}

            </Formik>

        );
    }


}