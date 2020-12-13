import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Home from '../pages/Home';

export default () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
