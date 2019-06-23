let Express         = require("express");
let Routes          = Express.Router();
let UserRoute       = require('./IT17152938/User.Route');
let CourseRoute     = require('./IT17056212/Course.Route');
let InstructorAssignRoute     = require('./IT17056212/InstructorAssign.Route');
let StudentEnrollRoute     = require('./IT17056212/StudentEnroll.Route');
let AssignmentMarks=require('./IT17018760/AssignmentMarks.Route');
let AssigmentRoute = require('./IT16178700/Assignment.Route');
let AssignmentUpload = require('./IT16178700/AssignmentUpload.Route');

Routes.use('/user/', UserRoute);
Routes.use('/course/', CourseRoute);
Routes.use('/courseinstructor/', InstructorAssignRoute);
Routes.use('/studentenroll/', StudentEnrollRoute);
Routes.use('/assignmentmarks/', AssignmentMarks);
Routes.use('/assignment/', AssigmentRoute);
Routes.use('/assignmentupload/', AssignmentUpload);

module.exports = Routes;