let mongoose        = require('../DBSchema/SchemaMapper');
let AssignmentSchema 		= mongoose.model('Assignment');

let AssignmentController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let assignment = new AssignmentSchema(data);
            assignment.save().then(() => {
                resolve({status: 200, message: "Added new assignment"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            console.log(data);
            AssignmentSchema.updateMany({aid: id}, data).then(() => {
                AssignmentSchema.find({aid:id}).exec().then(course => {
                    resolve({status: 200, data: course});
                }).catch(err => {
                    reject({status: 500, message: "Error:- " + err});
                })
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.findassignment = (assignmentid) => {
        return new Promise((resolve, reject) => {
            AssignmentSchema.find({ aid : assignmentid}).exec().then(assignment => {
                resolve({status: 200, data: assignment});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };


    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            AssignmentSchema.remove({aid:id}).then(() => {
                resolve({status: 200, message: "remove course"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    };

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            AssignmentSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (email,cid) => {
        return new Promise((resolve, reject) => {

            AssignmentSchema.find({iid:email,cid:cid}).exec().then(assignment => {
                console.log(assignment);
                resolve({status: 200, data: assignment});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchStudent = (cid) => {
        return new Promise((resolve, reject) => {

            AssignmentSchema.find({cid:cid}).exec().then(assignment => {
                console.log(assignment);
                resolve({status: 200, data: assignment});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAssignments= (cid) => {
        return new Promise((resolve, reject) => {

            AssignmentSchema.find({cid:cid}).exec().then(assignment => {
                console.log(assignment);
                resolve({status: 200, data: assignment});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search12 = (aid,cid) => {
        return new Promise((resolve, reject) => {

            AssignmentSchema.find({aid:aid,cid:cid}).exec().then(Assignment => {
                console.log(Assignment);
                resolve({status: 200, data: Assignment});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
};





module.exports = new AssignmentController();