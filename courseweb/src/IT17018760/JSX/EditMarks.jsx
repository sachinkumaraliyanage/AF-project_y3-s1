import React from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import "../CSS/EditMarks.css";
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';

let result2 = localStorage.getItem("user");
let result = localStorage.getItem("assignmentmarks");
let re ;
result2 = JSON.parse(result2);

let chuserid;






let k = 1;
let y = 1;

let cid = "";
let assNo = "";
let sid = "";
let marks = "";


console.log("lksachin");
console.log(result2);
if (result2 == null || result2 == undefined) {
    k = 1;
    y = 1;

} else {


    k = result2.types.value;
    y = result2.types.value;
}

const schema = yup.object().shape({
    cid: yup.string().required('Required'),
    assNo: yup.string().required('Required'),
    sid: yup.string().email().required('Required'),
    marks: yup.string().required('Required'),




});


const chsubmit = function (val,idd) {
    console.log("sachin789654");
    console.log(val);


    axios.post('http://'+localStorage.getItem("backip")+'/assignmentmarks/update/'+idd,val)
        .then(

            res =>
            {
                if (res.status != 200) {
                    alert("cant update try again");
                } else {
                    let user = res.data.data[0];
                    if(user!=undefined) {

                        alert("Marks Updated");
                    }
                    else{
                        alert("cant update try again");
                        window.location.reload();
                    }
                    window.location.href="../addmarks";

                }


            }

            ).catch((error) => {
        console.log(error.response);
        alert("cant update try again");
        window.location.reload();
    });
};

let thisclass;
class EditMarks extends React.Component {




    constructor(props) {
        super(props);
        if(!(y=='2'||y=='3')){
            alert("access denied");
            window.location.href="../../";
        }
        this.state={
            loaded:false,
            userde:{}
        }





        thisclass=this;
    }
    componentWillMount(){
        console.log("4")
    }
    async componentDidMount(){
        console.log("3")
        let ur = "http://"+localStorage.getItem("backip")+"/assignmentmarks/edit/" + this.props.userid;

        console.log(this.props.userid);
        await axios.get(ur).then(res => {


            let user2 = res.data.data;

            console.log("sachin79");
            console.log(user2);

            this.setState(
                {

                    userde:{us:user2},

                })
            cid=this.state.userde.us[0].cid;
            assNo=this.state.userde.us[0].assNo;
            sid=this.state.userde.us[0].sid;
            marks= this.state.userde.us[0].marks;

            se = se();
            console.log("1")

            this.setState(
                {


                    loaded:true
                })








        }).catch((error) => {

            console.log(error.response);
            alert(error);

        });



    }

    content(){
        console.log("6");
        return(<Formik
            validationSchema={schema}
            onSubmit={(values, {setSubmitting, resetForm}) => {


                setTimeout(() => {

                    chsubmit(values,this.props.userid);

                    setSubmitting(true);
                }, 500);
            }}
            enableReinitialize={true}
            initialValues={{
                cid:cid,
                assNo: assNo,
                sid: sid,
                marks: marks,


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
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Assignment ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="assNo"
                                value={values.assNo}
                                onChange={handleChange}
                                isValid={touched.assNo && !errors.assNo}
                            input disabled={true}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Student Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="sid"
                                value={values.sid}
                                onChange={handleChange}
                                isValid={touched.sid && !errors.sid}
                                input disabled={true}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Marks</Form.Label>
                            <Form.Control
                                type="text"
                                name="marks"
                                value={values.marks}
                                onChange={handleChange}
                                isValid={touched.marks && !errors.marks}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>



                    </Form.Row>
                    <div style={{width: '100%', textAlign: 'center'}}>
                        <Button type="submit" style={{width: '75%'}}>Update Marks</Button>
                    </div>
                </Form>

            )}

        </Formik>);
    }

    render() {
        console.log("2")
        console.log(cid)

                return (
                    <div>

                        {this.state.loaded ? this.content() : null}

                    </div>
                );




    }
}

export default EditMarks;

let se = function () {

    if (k == 2) {
        return {value: '2', label: 'Instructor'};
    } else if (k == 3) {
        return {value: '3', label: 'Admin'};
    } else {
        return {value: '1', label: 'Students'};
    }
};


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
        this.props.onChange('types', value);

    };

    handleBlur = () => {
        this.props.onBlur('types', true);

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

