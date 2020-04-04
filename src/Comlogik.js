import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Clients from './pages/Clients';
import CaseStudyContent from './pages/CaseStudyContent';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import News from './pages/News';
import NewsContent from './pages/NewsContent';
import ProductContent from './pages/ProductContent';

const Comlogik = () => {
  return (
    <Router basename="react_comlogik/dist">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/solutions">
          <Solutions />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/news-content">
          <NewsContent />
        </Route>
        <Route path="/case-study-content">
          <CaseStudyContent />
        </Route>
        <Route path="/product-content">
          <ProductContent />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Comlogik;
