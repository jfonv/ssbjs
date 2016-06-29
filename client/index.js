/* eslint-disable no-unused-vars */

import App from './components/App';
import Fighters from './components/Fighters';
import Weapons from './components/Weapons';
import Home from './components/Home';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="fighters" component={Fighters} />
      <Route path="weapons" component={Weapons} />
    </Route>
  </Router>
  , document.getElementById('root'));
