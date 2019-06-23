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

function editItem(id){
    window.location.href="../edituser/"+id;
}

function DeleteItem(id,name){
    const options = {
        title: 'Delete',
        message: 'Do You Want to delete '+name,
        buttons: [
            {
                label: 'Yes',
                onClick: () => {
                    let ur = "http://"+localStorage.getItem("backip")+"/user/"+id;

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
export default class UserManage extends Component {

    constructor(props) {
        super(props);
        if(y!='3'){
            alert("access denied");
            window.location.href="../../";
        }
        this.state={
            loaded:false,
            userde:{},
            columns:[],
            data:[],
        }
        // console.log(this);






    }

    async componentDidMount(){

        let user2;
        console.log("3");
        let ur = "http://"+localStorage.getItem("backip")+"/user/";
        await axios.get(ur).then(res => {


            user2 = res.data.data;

            console.log(user2);

            this.setState(
                {

                    userde:user2,

                });
            //console.log(this.state.userde.us[0].firstName);

            console.log("1");
            let r=[];
            this.state.userde.map(function (us) {
                // console.log(us.types);
                return (
                    r.push({

                        name: us.firstName+' '+us.lastName,

                        email:us.email,
                        address:us.address,
                        pno:us.pno,
                        type: us.types.label,
                        edit:<IconButton onClick={() => editItem(us._id)}><EditIcon color="primary" /></IconButton>,
                        delete:<IconButton onClick={() => DeleteItem(us._id,us.firstName+' '+us.lastName)}><DeleteIcon color="error" /></IconButton>



                })
                );
            }.bind(this));
            console.log(r);
             this.setState({
                columns: [
                    { title: 'Name', field: 'name' },
                    { title: 'Email', field: 'email' },
                    { title: 'Address', field: 'address'},
                    { title: 'Phone No', field: 'pno'},
                    { title: 'Type', field: 'type'},
                    { title: 'Edit', field: 'edit'},
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