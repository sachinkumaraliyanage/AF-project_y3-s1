import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from './IT17152938/JSX/Home';
import RegisterMain from "./IT17152938/JSX/RegisterMain";
import EdituserMain from "./IT17152938/JSX/EdituserMain";
import EdituseradminMain from "./IT17152938/JSX/EdituseradminMain";
import UsermanageMain from "./IT17152938/JSX/UsermanageMain";
import AddCourseMain from "./IT17056212/JSX/AddCourseMain";
import AssignInstructorsMain from "./IT17056212/JSX/AssignInstructorsMain";
import MyCoursesMain from "./IT17056212/JSX/MyCoursesMain";
import ViewCourseMain from "./IT17056212/JSX/ViewCourseMain";
import EnrollMain from "./IT17056212/JSX/EnrollMain";
import CourseManageMain from "./IT17056212/JSX/CourseManageMain";

const RouterRoutes = () => (
    <Switch>
        <Route exact path="/" component={withRouter(Home)}/>
        <Route exact path="/index" component={withRouter(Home)}/>
        <Route exact path="/register" component={withRouter(RegisterMain)}/>
        <Route exact path="/edituser" component={withRouter(EdituserMain)}/>
        <Route exact path="/edituser/:id" component={withRouter(EdituseradminMain)}/>
        <Route exact path="/usermanage" component={withRouter(UsermanageMain)}/>
        <Route exact path="/addcourse" component={withRouter(AddCourseMain)}/>
        <Route exact path="/assigninstructors" component={withRouter(AssignInstructorsMain)}/>
        <Route exact path="/mycoursesmain" component={withRouter(MyCoursesMain)}/>
        <Route exact path="/viewcoursemain" component={withRouter(ViewCourseMain)}/>
        <Route exact path="/enrollmain" component={withRouter(EnrollMain)}/>
        <Route exact path="/coursemanagemain" component={withRouter(CourseManageMain)}/>

    </Switch>

);


export default RouterRoutes;