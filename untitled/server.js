const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const port = 5000;
const Routes        = require("./Routes");


//npm install --save express
//npm install --save body-parser
//npm install --save cors
//npm install --save mongoose
//npm install --save nodemailer
//npm install --save dotenv


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// mongoose.connect('mongodb://127.0.0.1:27017/user', {useNewUrlParser: true});
// const connection = mongoose.connection;

// connection.once('open', function () {
//     console.log("mongodb connection established");
// })

/*userRoutes.route('/').get(function (req, res) {


    User.find(function (err, user) {

        if (err) {

            console.log(err);

        } else {

            res.json(user);

        }

    });

});*/


/*userRoutes.route('/:id').get(function (req, res) {


    let id = req.params.id;
    User.findById(id, function (err, user) {

        res.json(user);

    });

});*/

/*userRoutes.route('/add').post(function (req, res) {

    let user = new User(req.body);
    user.save()
        .then(user => {

            res.status(200).json({'user': 'Addded successfully'});

        })
        .catch(err => {

            res.status(400).send('Adding new user failed');

        });

});*/
/*
userRoutes.route('/:email/:password').get(function (req, res) {

    console.log("hdhdhgdhd");
    let mail = req.params.email;
    let pass = req.params.password;
    console.log(mail);
    console.log(pass);*/
    // res.send(pass);
//,status:true
   /* User.find({ email : mail, password : pass }, function (err, user) {

        // res.send(user);
        if(user === undefined || user.length == 0){
            res.status(404).send('No');
        }else{
            res.json(user);
        }
        // res.json(user);


    });

});*/

// /*userRoutes.route('/update/:id').post(function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//
//         if (!user)
//             res.status(400).send('data is not found');
//
//         else
//             user.firstName = req.body.firstName;
//             user.lastName = req.body.lastName;
//             user.email = req.body.email;
//             user.pno = req.body.pno;
//             user.password = req.body.password;
//             user.types = req.body.types;
//             user.address = req.body.address;
//             user.editby = req.body.editby;
//             user.editdate = req.body.editdate;
//             user.status = req.body.status;
//
//
//         user.save().then(user => {
//
//
//             res.json('user updated');
//
//         })
//             .catch(err => {
//
//                 res.status(400).send("update not possible");
//
//             });
//     });
// })*/


app.use('/', Routes);


app.listen(port, function () {


    console.log("server is running on port " + port);

});