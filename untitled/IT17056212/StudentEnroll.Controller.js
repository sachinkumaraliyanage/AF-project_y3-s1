let mongoose        = require('../DBSchema/SchemaMapper');
let CourseStudentSchema 		= mongoose.model('CourseStudent');

let CourseStudentController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let coursestudent = new CourseStudentSchema(data);
            coursestudent.save().then(() => {
                resolve({status: 200, message: "Student Enrolled"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            CourseStudentSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "Update Enroll"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (email) => {
        return new Promise((resolve, reject) => {
            CourseStudentSchema.find({semail:email}).exec().then(coursestudent => {
                resolve({status: 200, data: coursestudent});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search2 = (mail,enroll) => {
        return new Promise((resolve, reject) => {
            CourseStudentSchema.find({ semail : mail, enrolled:enroll}).exec().then(coursestudent => {
                resolve({status: 200, data: coursestudent});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search3 = (id,mail) => {
        return new Promise((resolve, reject) => {
            CourseStudentSchema.find({cid : id,semail : mail}).exec().then(coursestudent => {
                resolve({status: 200, data: coursestudent});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            CourseStudentSchema.remove({cid:id}).then(() => {
                resolve({status: 200, message: "Unenroll Student"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            CourseStudentSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

}

module.exports = new CourseStudentController();