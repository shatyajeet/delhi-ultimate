import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/header/header';
import Home from './home/home';
import Teams from './teams/teams';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/teams" component={Teams} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
