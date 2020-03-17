import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {
  return <h1>Home</h1>;
};

export default class Comlogik extends Component {
  render() {
    return (
      <Router basename="react_comlogik/dist">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <h1>Bruh</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
