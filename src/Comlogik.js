import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

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

const Careers = Loadable({
  loader: () => import('./pages/Careers'),
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
  return (
    <Router
      basename={
        process.env.NODE_ENV === 'development'
          ? process.env.ROUTER_BASENAME
          : ''
      }
    >
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="ComlogikConsent"
        style={{ backgroundColor: '#394049' }}
        buttonClasses="uk-button uk-button-small uk-button-primary"
        buttonStyle={{
          color: 'white',
          backgroundColor: '#cc3396',
          fontSize: '13px',
          borderRadius: '4px',
        }}
        debug={true}
        expires={150}
      >
        Our website uses cookies to enhance your browsing experience.
      </CookieConsent>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/careers">
          <Careers />
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
        <Route exact path="/solutions">
          <Solutions />
        </Route>
        <Route exact path="/solutions/:product">
          <ProductContent />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/news/:keyword">
          <NewsContent />
        </Route>
        <Route path="/case-study-content">
          <CaseStudyContent />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Comlogik;
