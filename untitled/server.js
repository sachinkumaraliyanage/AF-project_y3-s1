const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
require('dotenv').config();
const userRoutes = express.Router();
const port = 5000;
let User = require('./user.model');

//npm install --save express
//npm install --save body-parser
//npm install --save cors
//npm install --save mongoose
//npm install --save nodemailer
//npm install --save dotenv


app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/user', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("mongodb connection established");
})

userRoutes.route('/').get(function (req, res) {


    User.find(function (err, user) {

        if (err) {

            console.log(err);

        } else {

            res.json(user);

        }

    });

});


userRoutes.route('/:id').get(function (req, res) {


    let id = req.params.id;
    User.findById(id, function (err, user) {

        res.json(user);

    });

});

userRoutes.route('/add').post(function (req, res) {

    let user = new User(req.body);
    user.save()
        .then(user => {

            res.status(200).json({'user': 'Addded successfully'});

        })
        .catch(err => {

            res.status(400).send('Adding new user failed');

        });

});

userRoutes.route('/:email/:password').get(function (req, res) {

    console.log("hdhdhgdhd");
    let mail = req.params.email;
    let pass = req.params.password;
    console.log(mail);
    console.log(pass);
    // res.send(pass);

    User.find({ email : mail, password : pass }, function (err, user) {

        // res.send(user);
        if(user === undefined || user.length == 0){
            res.status(404).send('No');
        }else{
            res.json(user);
        }
        // res.json(user);


    });

});

userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function (err, user) {

        if (!user)
            res.status(400).send('data is not found');

        else
            user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;


        user.save().then(user => {


            res.json('user updated');

        })
            .catch(err => {

                res.status(400).send("update not possible");

            });
    });
})


app.use('/user', userRoutes);


app.listen(port, function () {


    console.log("server is running on port " + port);

});