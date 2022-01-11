import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

import Loading from './components/Loading';
import Scroll from './components/Scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeaturedModal from './components/FeaturedModal';
import { isDev } from './helpers/helpers';

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

const CaseStudyContent = Loadable({
  loader: () => import('./pages/CaseStudyContent'),
  loading: Loading,
});

const Clients = Loadable({
  loader: () => import('./pages/Clients'),
  loading: Loading,
});

const CovidSystems = Loadable({
  loader: () => import('./pages/CovidSystems'),
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
    <>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="comlogik_cookie_consent"
        style={{ backgroundColor: '#394049', fontSize: '14px' }}
        buttonClasses="uk-button uk-button-small uk-button-primary"
        buttonStyle={{
          color: 'white',
          backgroundColor: '#cc3396',
          fontSize: '12px',
          borderRadius: '4px',
        }}
        debug={isDev}
        expires={365}
      >
        Our website uses cookies to enhance your browsing experience.
      </CookieConsent>
      <Router basename="/">
        <Scroll />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/covid">
            <CovidSystems />
          </Route>
          <Route exact path="/careers">
            <Careers />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/clients/:client">
            <CaseStudyContent />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/contact-us">
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
          <Route exact path="/news/:id/:title_id?">
            <NewsContent />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <FeaturedModal />
    </>
  );
};

export default Comlogik;
