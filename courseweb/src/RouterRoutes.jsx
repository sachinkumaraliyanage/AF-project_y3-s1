import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from './IT17152938/JSX/Home';
import RegisterMain from "./IT17152938/JSX/RegisterMain";


const RouterRoutes = () => (
    <Switch>
        <Route exact path="/" component={withRouter(Home)}/>
        <Route exact path="/index" component={withRouter(Home)}/>
        <Route exact path="/register" component={withRouter(RegisterMain)}/>

    </Switch>

);


export default RouterRoutes;