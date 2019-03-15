import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import SideBar from './../components/SideBar';
import SideBarRight from './../components/SideBarRight';
import Game from 'app/src/components/Game';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <main>
      < SideBar />
      < Game />
      {/* <Switch>
        <Route path="/" component={Game} exact={true} />
      </Switch> */}
      < SideBarRight />
      </main>
    </div>
  </Router>
);

export default AppRouter;