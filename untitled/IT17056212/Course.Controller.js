let mongoose        = require('../DBSchema/SchemaMapper');
let CourseSchema 		= mongoose.model('Course');

let CourseController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let course = new CourseSchema(data);
            course.save().then(() => {
                resolve({status: 200, message: "Added new course"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            console.log(data);
            CourseSchema.updateMany({cid: id}, data).then(() => {
                CourseSchema.find({cid:id}).exec().then(course => {
                    resolve({status: 200, data: course});
                }).catch(err => {
                    reject({status: 500, message: "Error:- " + err});
                })
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

 /*   this.search = (id) => {
        return new Promise((resolve, reject) => {
            CourseSchema.find({_id:id}).exec().then(course => {
                resolve({status: 200, data: course});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }*/
    this.findcourse = (courseid) => {
        return new Promise((resolve, reject) => {
            CourseSchema.find({ cid : courseid}).exec().then(course => {
                resolve({status: 200, data: course});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.checkenroll = (courseid,key,accept) => {
        return new Promise((resolve, reject) => {


            CourseSchema.find({ cid : courseid, enrollkey : key ,accepted : accept}).exec().then(course => {
                resolve({status: 200, data: course});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            CourseSchema.remove({cid:id}).then(() => {
                resolve({status: 200, message: "remove course"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            CourseSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

}

module.exports = new CourseController();