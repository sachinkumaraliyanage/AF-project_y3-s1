import React from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../CSS/Assignment.css";

import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';
import DatePicker from "./AddAssignment";

let result2 = localStorage.getItem("user");
let result = localStorage.getItem("assignmentmarks");
let re ;
result2 = JSON.parse(result2);

//for set user details
let chuserid;


////////////////////////////



let k = 1;
let y = 1;

let aid = "";
let cid = "";
let description = "";
let duedate = "";


if (result2 == null || result2 == undefined) {
    k = 1;
    y = 1;

} else {


    k = result2.types.value;
    y = result2.types.value;
}

const schema = yup.object().shape({
    aid: yup.string().required('Required'),
    cid: yup.string().required('Required'),
    description: yup.string().required('Required'),
    duedate: yup.string().email().required('Required'),




});


const chsubmit = function (val,aid) {
    console.log("sachin789654");
    console.log(val);

    //val.editdate = new Date().toLocaleString();
    //val.editby = result._id;
    //val.status = true;
    // console.log(val);
    //+result._id
    axios.post('http://'+localStorage.getItem("backip")+'/assignment/update/'+aid,val)
        .then(

            res =>
            {
                if (res.status != 200) {
                    alert("cant update try again");
                } else {
                    let user = res.data.data[0];
                    if(user!==undefined) {
                        // console.log(user);
                        //localStorage.setItem("user", JSON.stringify(user));
                        alert("Assignment Updated");
                    }
                    else{
                        alert("cant update try again");
                        window.location.reload();
                    }
                    window.location.href="../viewassignmentall";

                }


            }

        ).catch((error) => {
        // console.log('v');
        console.log(error.response);
        alert("cant update try again");
        window.location.reload();
    });
};

let thisclass;
class EditAssignment extends React.Component {




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
        // console.log(this);





        thisclass=this;
    }
    componentWillMount(){
        console.log("4")
    }
    async componentDidMount(){
        console.log("3")

        let ur = "http://"+localStorage.getItem("backip")+"/assignment/edit/" + this.props.aid;
        console.log("sachin78");
        console.log(this.props.aid);
        await axios.get(ur).then(res => {


            let user2 = res.data.data;

            console.log("sachin79");
            console.log(user2);

            this.setState(
                {

                    userde:{us:user2},

                })
            //   console.log(this.state.userde.us);
            aid=this.state.userde.us[0].aid;
            cid=this.state.userde.us[0].cid;
            description=this.state.userde.us[0].description;
            duedate= this.state.userde.us[0].duedate;

            se = se();
            console.log("1")

            this.setState(
                {


                    loaded:true
                })


            /*this.state.data.map(function(u){
                return  (
                    console.log(u.firstname)
                );
            })*/






        }).catch((error) => {

            console.log(error.response);
            alert(error);

        });

        // console.log(this.props.userid);


        //console.log(super.props.match.params.id);
        // console.log("ssss"+po.props.match.params.id);


    }

    content(){
        console.log("6");
        return(<Formik
            validationSchema={schema}
            onSubmit={(values, {setSubmitting, resetForm}) => {


                setTimeout(() => {
                    // console.log(JSON.stringify(values, null, 2));
                    //  alert("Marks Updated")
                    // alert(values);
                    chsubmit(values,this.props.aid);
                    // resetForm({});
                    setSubmitting(true);
                }, 500);
            }}
            enableReinitialize={true}
            initialValues={{
                aid:aid,
                cid: cid,
                description: description,
                duedate: duedate,


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
                            <Form.Label>Assignment ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="aid"
                                value={values.aid}
                                onChange={handleChange}
                                isValid={touched.aid && !errors.aid}
                                input disabled={true}
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
                                isValid={touched.cid && !errors.cid}
                                input disabled={true}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                isValid={touched.description && !errors.description}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Due Date</Form.Label>
                            <DatePicker
                                className="date-picker"
                                type="date"
                                selected={new Date()}
                                name="duedate"
                                value={new Date()}
                                minDate={new Date()}
                                onChange={handleChange}
                                isValid={touched.description && !errors.duedate}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>



                    </Form.Row>
                    <div style={{width: '100%', textAlign: 'center'}}>
                        <Button type="submit" style={{width: '75%'}}>Update Assignment</Button>
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


        // console.log("iop"+this.state.userde);

        //return (<div></div>);

    }
}

export default EditAssignment;

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

