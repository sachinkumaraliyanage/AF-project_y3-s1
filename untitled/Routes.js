let Express         = require("express");
let Routes          = Express.Router();
let UserRoute       = require('./IT17152938/User.Route');
let CourseRoute     = require('./IT17056212/Course.Route');
let InstructorAssignRoute     = require('./IT17056212/InstructorAssign.Route');
let StudentEnrollRoute     = require('./IT17056212/StudentEnroll.Route');

Routes.use('/user/', UserRoute);
Routes.use('/course/', CourseRoute);
Routes.use('/courseinstructor/', InstructorAssignRoute);
Routes.use('/studentenroll/', StudentEnrollRoute);

module.exports = Routes;