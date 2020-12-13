import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Tips from '../pages/Tips';
import firebase from '../services/firebase';

const RouterListener = () => {
  const location = useLocation();

  useEffect(() => {
    firebase.analytics().setCurrentScreen(location.pathname);
  }, [location]);

  return <></>;
};

export default () => (
  <Router>
    <Navbar />
    <RouterListener />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/tips">
        <Tips />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
