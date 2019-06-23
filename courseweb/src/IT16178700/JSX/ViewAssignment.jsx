import React, {Component} from 'react';
import MaterialTable from 'material-table';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import axios from "axios";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


let result = localStorage.getItem("assignment");
// result = JSON.parse(result);
let y = 1;

//
// if (result == null || result == undefined) {
//
//     y = 1;
// } else {
//
//     y = result.types.value;
//
// }


function DeleteItem(aid){
    const options = {
        title: 'Delete',
        message: 'Do You Want to delete '+aid,
        buttons: [
            {
                label: 'Yes',
                onClick: () => {
                    let ur = "http://"+localStorage.getItem("backip")+"/assignment/"+aid;

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
export default class ViewAssignment extends Component {

    constructor(props) {
        super(props);

        this.state={
            loaded:false,
            coursedata:{},
            columns:[],
            data:[],
        }
        // console.log(this);






    }

    async componentDidMount(){

        let assi;
        console.log("3");
        let ur = "http://"+localStorage.getItem("backip")+"/assignment/searchAssignment/"+localStorage.getItem("course");
        await axios.get(ur).then(res => {


            assi = res.data.data;

            console.log(assi);

            this.setState(
                {

                    assignmentdata:assi,

                });

            console.log("1");
            let r=[];
            this.state.assignmentdata.map(function (us) {
                // console.log(us.types);
                return (
                    r.push({
                        aid:us.aid,
                        cid:us.cid,
                        description: us.description,
                        duedate:us.duedate,
                        adddate:us.adddate,
                        iid:us.iid,


                        delete:<IconButton onClick={() => DeleteItem(us.aid)}><DeleteIcon color="error" /></IconButton>



                    })
                );
            }.bind(this));
            console.log(r);
            this.setState({
                columns: [
                    { title: 'Assignment ID', field: 'aid' },
                    { title: 'Course ID', field: 'cid' },
                    { title: 'Description', field: 'description' },
                    { title: 'Start Date', field: 'adddate'},
                    { title: 'Due Date', field: 'duedate'},
                    { title: 'Delete', field: 'delete'},

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