let mongoose        = require('../DBSchema/SchemaMapper');
let CourseInstructorSchema 		= mongoose.model('CourseInstructor');

let CourseInstructorController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let courseinstructor = new CourseInstructorSchema(data);
            courseinstructor.save().then(() => {
                resolve({status: 200, message: "Instructor Assigned"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = (id, mail, data) => {
        return new Promise((resolve, reject) => {
            console.log(data);
            CourseInstructorSchema.updateMany({cid: id,iemail:mail}, data).then(() => {
                CourseInstructorSchema.find({cid:id}).exec().then(courseinstructor => {
                    resolve({status: 200, data: courseinstructor});
                }).catch(err => {
                    reject({status: 500, message: "Error:- " + err});
                })
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (email) => {
        return new Promise((resolve, reject) => {
            CourseInstructorSchema.find({iemail:email}).exec().then(courseinstructor => {
                resolve({status: 200, data: courseinstructor});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search2 = (mail,notify) => {
        return new Promise((resolve, reject) => {
            CourseInstructorSchema.find({ iemail : mail, notified:notify}).exec().then(courseinstructor => {
                resolve({status: 200, data: courseinstructor});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search3 = (mail,id) => {
        return new Promise((resolve, reject) => {
            CourseInstructorSchema.find({ iemail : mail, cid:id}).exec().then(courseinstructor => {
                resolve({status: 200, data: courseinstructor});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            CourseInstructorSchema.remove({cid:id}).then(() => {
                resolve({status: 200, message: "Unassign Instructor"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            CourseInstructorSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

}

module.exports = new CourseInstructorController();