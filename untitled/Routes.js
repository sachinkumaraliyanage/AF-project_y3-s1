let Express         = require("express");
let Routes          = Express.Router();
let UserRoute       = require('./IT17152938/User.Route');

Routes.use('/user/', UserRoute);


module.exports = Routes;