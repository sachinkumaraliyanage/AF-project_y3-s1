let mongoose        = require('../DBSchema/SchemaMapper');
let UserSchema 		= mongoose.model('User');

let UserController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let user = new UserSchema(data);
            user.save().then(() => {
                resolve({status: 200, message: "Added new user"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            UserSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "update user"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            UserSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.login = (mail,pass) => {
        return new Promise((resolve, reject) => {


            UserSchema.find({ email : mail, password : pass }).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            UserSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "remove user"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            UserSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

}

module.exports = new UserController();