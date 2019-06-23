import React, {Component} from 'react';
import MaterialTable from 'material-table';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import axios from "axios";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


let result = localStorage.getItem("user");
result = JSON.parse(result);
let y = 1;

if (result == null || result == undefined) {

    y = 1;
} else {

    y = result.types.value;

}


function DeleteItem(cid,name){
    const options = {
        title: 'Delete',
        message: 'Do You Want to delete '+name,
        buttons: [
            {
                label: 'Yes',
                onClick: () => {

                    let ur = "http://"+localStorage.getItem("backip")+"/course/"+cid;
                    let ur2 = "http://"+localStorage.getItem("backip")+"/courseinstructor/"+cid;
                    let ur3 = "http://"+localStorage.getItem("backip")+"/studentenroll/"+cid;

                    axios.delete(ur).then(res => {

                        if(res.data.message){
                            alert(res.data.message);
                            window.location.reload();
                        }


                    }).catch((error) => {

                        console.log(error.response);
                        alert(error);

                    });

                    axios.delete(ur2).then(res => {

                        if(res.data.message){
                            alert(res.data.message);
                            window.location.reload();
                        }


                    }).catch((error) => {

                        console.log(error.response);
                        alert(error);

                    });

                    axios.delete(ur3).then(res => {

                        if(res.data.message){
                            alert(res.data.message);
                            window.location.reload();
                        }


                    }).catch((error) => {

                        console.log(error.response);
                        alert(error);

                    });
                }
            },
            {
                label: 'No',
                onClick: () => {}
            }
        ],
        childrenElement: () => <div />,

        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => {},
        onClickOutside: () => {},
        onKeypressEscape: () => {}
    };

    confirmAlert(options);
}
let a="dd";
export default class CourseManage extends Component {

    constructor(props) {
        super(props);
        if(y!='3'){
            alert("access denied");
            window.location.href="../../";
        }
        this.state={
            loaded:false,
            coursedata:{},
            columns:[],
            data:[],
        }
        // console.log(this);






    }

    async componentDidMount(){

        let course2;
        console.log("3");
        let ur = "http://"+localStorage.getItem("backip")+"/course/";
        await axios.get(ur).then(res => {


            course2 = res.data.data;

            console.log(course2);

            this.setState(
                {

                    coursedata:course2,

                });
            //console.log(this.state.userde.us[0].firstName);

            console.log("1");
            let r=[];
            this.state.coursedata.map(function (us) {
                // console.log(us.types);
                return (
                    r.push({
                        cid:us.cid,
                        cname: us.cname,
                        enrollkey:us.enrollkey,
                        adddate:us.adddate,
                        accepted:us.accepted,


                        delete:<IconButton onClick={() => DeleteItem(us.cid,us.cname)}><DeleteIcon color="error" /></IconButton>



                    })
                );
            }.bind(this));
            console.log(r);
            this.setState({
                columns: [
                    { title: 'Course ID', field: 'cid' },
                    { title: 'Course Name', field: 'cname' },
                    { title: 'Enrollment Key', field: 'enrollkey' },
                    { title: 'Start Date', field: 'adddate'},
                    { title: 'Accepted(Yes/No)', field: 'accepted'},
                    { title: 'Delete', field: 'delete'},

                ],
                data: r,
            });

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

    render() {




        return (
            <MaterialTable
                title=""
                columns={this.state.columns }
                data={this.state.data}

            />
        );
    }
}