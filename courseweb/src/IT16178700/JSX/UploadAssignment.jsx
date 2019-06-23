import React from 'react'
import axios, {post} from 'axios';
import "../CSS/Upload.css"

let up="";
class UploadAssignment extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null,
            fileid:'',
            cid:'',
            aid:'',
            emailid:'',
            adddate:'',
            uploadid:''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }
    async onFormSubmit(e){
        e.preventDefault(); // Stop form submit
        let obj={};
        await this.fileUpload(this.state.file).then(response=>{
            console.log(response.data);
            this.setState({
                fileid: response.data.id
            })

            let result = localStorage.getItem("user");
            result = JSON.parse(result);

            obj = {
                emailid: result.email,
                uploadid:this.state.fileid,
                cid: localStorage.getItem("course"),
                aid:localStorage.getItem("assignment"),
                adddate:new Date().toLocaleString()

            }

        })





        await axios.post('http://'+localStorage.getItem("backip")+'/assignmentupload/add', obj)
            .then(res => alert('Uploaded Successfully'));
        console.log(obj);
        window.location.href="/viewcoursemain";




    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }
    fileUpload(file){
        const url = 'http://'+localStorage.getItem("fileip")+'/upload';
        const formData = new FormData();
        formData.append('file',file)
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }
        return  post(url, formData)
    }

    render() {
        return (

            <div className="cc">
            <div className="cc-intro">
            <h3>Upload a file</h3>
            <h4 style={{color: 'red'}}>{this.state.error}</h4>
            <h4 style={{color: 'green'}}>{this.state.msg}</h4>
                <form onSubmit={this.onFormSubmit}>
                    <h1>File Upload</h1>
                    <input type="file" onChange={this.onChange} />
                    <button type="submit">Upload</button>
                </form>
        </div>
        </div>
        )
    }
}

export default UploadAssignment;