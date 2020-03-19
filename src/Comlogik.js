import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Index from './pages/Index';

export default class Comlogik extends Component {
  render() {
    return (
      <Router basename="react_comlogik/dist">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Index></Index>
          </Route>
          <Route path="/about">
            <h1>Bruh</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
