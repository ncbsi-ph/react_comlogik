import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

const Index = Loadable({
  loader: () => import('./pages/Index'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
});

const Clients = Loadable({
  loader: () => import('./pages/Clients'),
  loading: Loading,
});

const CaseStudyContent = Loadable({
  loader: () => import('./pages/CaseStudyContent'),
  loading: Loading,
});

const Support = Loadable({
  loader: () => import('./pages/Support'),
  loading: Loading,
});

const Contact = Loadable({
  loader: () => import('./pages/Contact'),
  loading: Loading,
});

const Solutions = Loadable({
  loader: () => import('./pages/Solutions'),
  loading: Loading,
});

const News = Loadable({
  loader: () => import('./pages/News'),
  loading: Loading,
});

const NewsContent = Loadable({
  loader: () => import('./pages/NewsContent'),
  loading: Loading,
});

const ProductContent = Loadable({
  loader: () => import('./pages/ProductContent'),
  loading: Loading,
});

const Comlogik = () => {
  const devBasename = '/react_comlogik/dist';
  const productionBasename = '/new';

  return (
    <Router basename={ENVIRONMENT === 'dev' ? devBasename : productionBasename}>
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
