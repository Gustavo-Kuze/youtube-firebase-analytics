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
import firebase from '../services/firebase';

const RoutesListener = () => {
  const location = useLocation();

  useEffect(() => {
    firebase.analytics().setCurrentScreen(location.pathname);
  }, [location]);

  return <></>;
};

export default () => (
  <Router>
    <Navbar />
    <RoutesListener />
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
