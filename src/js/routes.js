import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Template from './components/layout/template';
import Home from './components/pages/home/home';
import Teams from './components/pages/teams/teams';
import Team from './components/pages/teams/team';

const routes = (
  <Route path='/' component={Template}>
    <IndexRoute component={Home} />
		<Route path='/teams' component={Teams} />
		<Route path='/team/:team' component={Team} />
  </Route>
);

export default routes;
