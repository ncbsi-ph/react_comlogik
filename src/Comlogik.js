import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Clients from './pages/Clients';
import Support from './pages/Support';
import Contact from './pages/Contact';

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
          <Route path="/support">
            <Support></Support>
          </Route>
          <Route path="/contact-us">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}
