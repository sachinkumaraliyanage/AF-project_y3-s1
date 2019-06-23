import React, {Component} from 'react';
import MaterialTable from 'material-table';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import axios from "axios";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



function editItem(id){
    window.location.href="./editmarks/"+id;
}

function DeleteItem(idd,sid){
    const options = {
        title: 'Delete',
        message: 'Do You Want to delete '+sid+' of assignment.',
        buttons: [
            {
                label: 'Yes',
                onClick: () => {
                    let ur = "http://"+localStorage.getItem("backip")+"/assignmentmarks/"+idd;

                    axios.delete(ur).then(res => {

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
export default class ViewInstructorMarks extends Component {

    constructor(props) {
        super(props);

        this.state={
            loaded:false,
            marksData:{},
            columns:[],
            data:[],
        }






    }

    async componentDidMount(){

        let result = localStorage.getItem("user");
        result = JSON.parse(result);

        let result2 = localStorage.getItem("assignment");
        let result3 = localStorage.getItem("course");





        if (result.types.value == 3 || result.types.value == 2 ) {
console.log("qwe");
            let marks2;
            let ur = "http://"+localStorage.getItem("backip")+"/assignmentmarks/"+result2+"/"+result3;
            await axios.get(ur).then(res => {

                console.log(res.data);

                marks2 = res.data.data;
                console.log(marks2);

                this.setState(
                    {

                        marksData: marks2,

                    });

                console.log("1");
                let r = [];
                this.state.marksData.map(function (us) {
                    return (
                        r.push({

                            cid: us.cid,
                            assNo: us.assNo,
                            sid: us.sid,
                            marks: us.marks,
                            edit: <IconButton onClick={() => editItem(us._id)}><EditIcon color="primary"/></IconButton>,
                            delete: <IconButton onClick={() => DeleteItem(us._id, us.sid)}><DeleteIcon
                                color="error"/></IconButton>


                        })
                    );
                }.bind(this));
                console.log(r);
                this.setState({
                    columns: [
                        {title: 'Course ID', field: 'cid'},
                        {title: 'Assignment ID', field: 'assNo'},
                        {title: 'Student ID', field: 'sid'},
                        {title: 'Marks', field: 'marks'},
                        {title: 'Edit', field: 'edit'},
                        {title: 'Delete', field: 'delete'},

                    ],
                    data: r,
                });

                this.setState(
                    {


                        loaded: true
                    })


            }).catch((error) => {

                console.log(error.response);
                alert(error);

            });
        }
        else{
            console.log("lkj");
            let marks2;
            let ur = "http://"+localStorage.getItem("backip")+"/assignmentmarks/"+result.email+'/'+result2+'/'+result3 ;
            await axios.get(ur).then(res => {

                console.log(res.data);

                marks2 = res.data.data;
                console.log(marks2);

                this.setState(
                    {

                        marksData:marks2,

                    });

                console.log("1");
                let r=[];
                this.state.marksData.map(function (us) {
                    return (
                        r.push({

                            cid:us.cid,
                            assNo:us.assNo,
                            sid:us.sid,
                            marks: us.marks,





                        })
                    );
                }.bind(this));
                console.log(r);
                this.setState({
                    columns: [
                        { title: 'Course ID', field: 'cid' },
                        { title: 'Assignment ID', field: 'assNo' },
                        { title: 'Email', field: 'sid'},
                        { title: 'Marks', field: 'marks'},


                    ],
                    data: r,
                });

                this.setState(
                    {


                        loaded:true
                    })







            }).catch((error) => {

                console.log(error.response);
                alert(error);

            });
        }


    }

    render() {




        return (
            <div style={{paddingTop:'10%'}}>
                <h3>View Marks</h3>
            <MaterialTable
                title=""
                columns={this.state.columns }
                data={this.state.data}

            />
            </div>
        );
    }
}