import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Template from './components/layout/template';
import Home from './components/pages/home/home';

const routes = (
  <Route path='/' component={Template}>
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
