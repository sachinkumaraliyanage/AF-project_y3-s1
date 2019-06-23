let mongoose        = require('../DBSchema/SchemaMapper');
let AssignmentMarksSchema 		= mongoose.model('AssignmentMarks');

let AssignmentMarksController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let AssignmentMarks = new AssignmentMarksSchema(data);
            AssignmentMarks.save().then(() => {
                resolve({status: 200, message: "Marks Added"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            console.log(id);
            console.log(data);
            AssignmentMarksSchema.updateMany({_id: id}, data).then(() => {
                AssignmentMarksSchema.find({_id:id}).exec().then(user => {
                    resolve({status: 200, data: user});
                }).catch(err => {
                    reject({status: 500, message: "Error:- " + err});
                })
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (email,cid,aid) => {
        return new Promise((resolve, reject) => {

            AssignmentMarksSchema.find({sid:email,assNo:cid,cid:aid}).exec().then(AssignmentMarks => {
                console.log(AssignmentMarks);
                resolve({status: 200, data: AssignmentMarks});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchedit = (id) => {
        console.log("sachin852")
        console.log(id);
        return new Promise((resolve, reject) => {
            AssignmentMarksSchema.find({_id:id}).exec().then(AssignmentMarks => {

                resolve({status: 200, data: AssignmentMarks});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        console.log(id);
        return new Promise((resolve, reject) => {

            AssignmentMarksSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "Delete Marks"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }

    this.searchAll = (cid,aid) => {
        return new Promise((resolve, reject) => {
            AssignmentMarksSchema.find({assNo:cid,cid:aid}).exec().then((data) => {
                console.log(cid+"Course id ");
                console.log(data);
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

}


module.exports = new AssignmentMarksController();