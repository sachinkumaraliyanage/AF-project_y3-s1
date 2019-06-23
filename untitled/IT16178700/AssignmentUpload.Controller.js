let mongoose        = require('../DBSchema/SchemaMapper');
let AssignmentUploadSchema 		= mongoose.model('AssignmentUpload');

let AssignmentUploadController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let assignment = new AssignmentUploadSchema(data);
            assignment.save().then(() => {
                resolve({status: 200, message: "Added new assignment"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.search1 = (cid,aid) => {
        return new Promise((resolve, reject) => {

            AssignmentUploadSchema.find({cid:cid,aid:aid}).exec().then(assignment => {
                console.log(assignment);
                resolve({status: 200, data: assignment});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
}



module.exports = new AssignmentUploadController();