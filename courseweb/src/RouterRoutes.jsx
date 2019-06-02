import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from './IT17152938/JSX/Home';
import RegisterMain from "./IT17152938/JSX/RegisterMain";
import EdituserMain from "./IT17152938/JSX/EdituserMain";
import EdituseradminMain from "./IT17152938/JSX/EdituseradminMain";
import UsermanageMain from "./IT17152938/JSX/UsermanageMain";



const RouterRoutes = () => (
    <Switch>
        <Route exact path="/" component={withRouter(Home)}/>
        <Route exact path="/index" component={withRouter(Home)}/>
        <Route exact path="/register" component={withRouter(RegisterMain)}/>
        <Route exact path="/edituser" component={withRouter(EdituserMain)}/>
        <Route exact path="/edituser/:id" component={withRouter(EdituseradminMain)}/>
        <Route exact path="/usermanage" component={withRouter(UsermanageMain)}/>

    </Switch>

);


export default RouterRoutes;