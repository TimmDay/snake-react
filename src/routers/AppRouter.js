import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Snake from '../components/snake';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Snake} exact={true}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;