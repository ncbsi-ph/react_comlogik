import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Clients from './pages/Clients';

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
            <About></About>
          </Route>
          <Route path="/clients">
            <Clients></Clients>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}
